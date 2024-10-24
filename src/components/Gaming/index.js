import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import BgContext from '../../context/BgContext'
import SideBar from '../SideBar'
import Header from '../Header'
import {
  Container,
  VideoList,
  VideoItem,
  FailureContainer,
  Headers,
  GlobalStyle,
} from './style'

const apiStatus = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Gaming extends Component {
  state = {
    apiList: [],
    status: apiStatus.loading,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y',
        'Content-Type': 'application/json',
      },
    }

    this.setState({status: apiStatus.loading})

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const newData = data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          viewCount: each.view_count,
        }))
        this.setState({apiList: newData, status: apiStatus.success})
      } else {
        this.setState({status: apiStatus.failure})
      }
    } catch (error) {
      console.error('Network error:', error)
      this.setState({status: apiStatus.failure})
    }
  }

  LoadingView = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  successView = lightTheme => {
    const {apiList} = this.state
    return (
      <div>
        <Headers
          style={{backgroundColor: lightTheme ? '#f1f5f9' : '#000000'}}
          lightTheme={lightTheme}
        >
          <SiYoutubegaming
            style={{
              borderRadius: 100,
              backgroundColor: lightTheme ? '#e2e8f0' : '#181818',
              height: 70,
              width: 80,
              textAlign: 'center',
              padding: 10,
              color: 'red',
            }}
          />
          <p>Gaming</p>
        </Headers>

        <VideoList
          style={{backgroundColor: lightTheme ? '#cbd5e1' : '#000000'}}
        >
          {apiList.map(each => (
            <Link to={`/videos/${each.id}`} key={each.id}>
              <VideoItem key={each.id} lightTheme={lightTheme}>
                <img src={each.thumbnailUrl} alt="game" />
                <h1>{each.title}</h1>
                <p>{each.viewCount} views</p>
              </VideoItem>{' '}
            </Link>
          ))}
        </VideoList>
      </div>
    )
  }

  failureView = lightTheme => (
    <FailureContainer lightTheme={lightTheme}>
      <img
        src={
          lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button
        type="button"
        onClick={() => {
          this.fetchData()
        }}
      >
        Retry
      </button>
    </FailureContainer>
  )

  renderView = lightTheme => {
    const {status} = this.state
    switch (status) {
      case apiStatus.loading:
        return this.LoadingView(lightTheme)
      case apiStatus.success:
        return this.successView(lightTheme)
      case apiStatus.failure:
        return this.failureView(lightTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <BgContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <>
              <GlobalStyle />
              <Header />
              <div style={{display: 'flex', flexGrow: 1}}>
                <SideBar />
                <Container lightTheme={lightTheme}>
                  {this.renderView(lightTheme)}
                </Container>
              </div>
            </>
          )
        }}
      </BgContext.Consumer>
    )
  }
}

export default Gaming
