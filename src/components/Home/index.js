import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {IoCloseSharp} from 'react-icons/io5'
import {IoMdSearch} from 'react-icons/io'
import SideBar from '../SideBar'
import Header from '../Header'
import BgContext from '../../context/BgContext'
import {
  LoaderContainer,
  NoResultsContainer,
  VideoListContainer,
  FailureContainer,
  SearchContainer,
  BgContainer,
  Icon,
  Main,
  Profile,
  FlexItem,
  GlobalStyle,
  RenderItem,
} from './style'

const apiStatus = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Home extends Component {
  state = {
    searchResult: '',
    apiList: [],
    premium: true,
    status: apiStatus.loading,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {searchResult} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchResult}`
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
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  successView = lightTheme => {
    const {apiList} = this.state
    if (apiList.length === 0) {
      return (
        <NoResultsContainer
          lightTheme={lightTheme}
          style={{color: lightTheme ? '#000000' : '#ffffff'}}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <h1>No Search results found</h1>
          <p>Try different key words or remove search filter</p>
          <button
            style={{
              color: lightTheme ? '#ffffff' : '#ffffff',
              backgroundColor: 'blue',
              border: 0,
            }}
            type="button"
            onClick={() => {
              this.setState({searchResult: ''}, this.fetchData)
            }}
          >
            Retry
          </button>
        </NoResultsContainer>
      )
    }
    return (
      <VideoListContainer lightTheme={lightTheme}>
        <ul>
          {apiList.map(each => (
            <Link to={`/videos/${each.id}`} key={each.id}>
              <li>
                <img src={each.thumbnailUrl} alt="video thumbnail" />
                <Profile>
                  <img
                    src={each.profileImageUrl}
                    alt="channel logo"
                    style={{height: 50, width: 50}}
                  />

                  <FlexItem>
                    <p>{each.title}</p>
                    <p>{each.name}</p>
                    <p>{each.viewCount}</p>
                    <p>{formatDistanceToNow(new Date(each.publishedAt))}</p>
                  </FlexItem>
                </Profile>
              </li>
            </Link>
          ))}
        </ul>
      </VideoListContainer>
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
      case 'Loading':
        return this.LoadingView(lightTheme)
      case 'Success':
        return this.successView(lightTheme)
      case 'Failure':
        return this.failureView(lightTheme)
      default:
        return null
    }
  }

  render() {
    const {searchResult, premium} = this.state

    return (
      <BgContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <div data-testid="home">
              <GlobalStyle />
              <Header />
              <div>
                <div style={{display: 'flex', flexGrow: 1}}>
                  <SideBar />
                  <Main
                    style={{
                      backgroundColor: lightTheme ? '#f9f9f9' : '#181818',
                    }}
                  >
                    <BgContainer
                      style={{display: premium ? 'block' : 'none'}}
                      data-testid="banner"
                    >
                      <Icon data-testid="close">
                        <IoCloseSharp
                          onClick={() => {
                            this.setState(prevState => ({
                              premium: !prevState.premium,
                            }))
                          }}
                        />
                      </Icon>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                      <button type="button">GET IT NOW</button>
                    </BgContainer>

                    <SearchContainer>
                      <input
                        style={{
                          backgroundColor: !lightTheme ? '#181818' : '#f9f9f9',
                          color: lightTheme ? '#181818' : '#ffffff',
                        }}
                        type="search"
                        value={searchResult}
                        placeholder="Search"
                        onChange={event =>
                          this.setState(
                            {searchResult: event.target.value},
                            this.fetchData,
                          )
                        }
                      />
                      <button
                        type="button"
                        data-testid="searchButton"
                        onClick={this.fetchData}
                        style={{
                          backgroundColor: !lightTheme ? '#181818' : '#f9f9f9',
                          color: lightTheme ? '#181818' : '#ffffff',
                        }}
                      >
                        <IoMdSearch size={25} />
                      </button>
                    </SearchContainer>

                    <RenderItem
                      style={{
                        backgroundColor: !lightTheme ? '#000000' : '#f9f9f9',
                      }}
                    >
                      {this.renderView(lightTheme)}
                    </RenderItem>
                  </Main>
                </div>
              </div>
            </div>
          )
        }}
      </BgContext.Consumer>
    )
  }
}

export default Home
