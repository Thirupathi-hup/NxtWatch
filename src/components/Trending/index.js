import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import SideBar from '../SideBar'
import Header from '../Header'
import BgContext from '../../context/BgContext'
import {
  PageContainer,
  VideoList,
  VideoItem,
  LoaderContainer,
  FailureViewContainer,
  RetryButton,
  HeadingContainer,
  GlobalStyle,
} from './style'

const apiStatus = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Trending extends Component {
  state = {
    apiList: [],
    status: apiStatus.loading,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const url = 'https://apis.ccbp.in/videos/trending'
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
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
          viewCount: each.view_count,
          publishedAt: each.published_at,
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
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  successView = lightTheme => {
    const {apiList} = this.state
    return (
      <>
        <HeadingContainer lightTheme={lightTheme}>
          <FaFire
            style={{
              marginTop: 25,
              borderRadius: 100,
              backgroundColor: lightTheme ? '#e2e8f0' : '#212121',
              height: 70,
              width: 80,
              textAlign: 'center',
              padding: 10,
              color: 'red',
            }}
          />
          <p>Trending</p>
        </HeadingContainer>
        <VideoList>
          {apiList.map(each => (
            <Link to={`/videos/${each.id}`} key={each.id}>
              <VideoItem
                lightTheme={lightTheme}
                style={{backgroundColor: lightTheme ? '#e2e8f0' : '#000000'}}
              >
                <img src={each.thumbnailUrl} alt={each.name} />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <h1>{each.title}</h1>
                  <p>{each.name}</p>
                  <p>{each.viewCount} views</p>
                  <p>{formatDistanceToNow(new Date(each.publishedAt))} ago</p>
                </div>
              </VideoItem>
            </Link>
          ))}
        </VideoList>
      </>
    )
  }

  failureView = lightTheme => (
    <FailureViewContainer lightTheme={lightTheme}>
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
        We are having some trouble completing your request. Please try again.
      </p>
      <RetryButton onClick={this.fetchData}>Retry</RetryButton>
    </FailureViewContainer>
  )

  renderView = lightTheme => {
    const {status} = this.state
    switch (status) {
      case apiStatus.loading:
        return this.LoadingView()
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
        {({lightTheme}) => (
          <>
            <GlobalStyle />
            <Header />
            <div style={{display: 'flex', flexGrow: 1}}>
              <SideBar />
              <PageContainer
                lightTheme={lightTheme}
                style={{backgroundColor: lightTheme ? '#64748b' : '#000000'}}
              >
                {this.renderView(lightTheme)}
              </PageContainer>
            </div>
          </>
        )}
      </BgContext.Consumer>
    )
  }
}

export default Trending
