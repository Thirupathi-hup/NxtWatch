import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import ReactPlayer from 'react-player'
import SideBar from '../SideBar'
import Header from '../Header'
import BgContext from '../../context/BgContext'
import {
  PageContainer,
  VideoContainer,
  ActionIcons,
  ProfileContainer,
  LoaderContainer,
  FailureViewContainer,
  RetryButton,
  GlobalStyle,
  Container,
  Flex,
} from './style'

const apiStatus = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class VideoItemDetails extends Component {
  state = {
    apiList: {},
    status: apiStatus.loading,
    liked: false,
    disliked: false,
    save: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  toggleLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
    }))
    this.setState(prevState => ({
      disliked: prevState.liked ? false : prevState.disliked,
    }))
  }

  toggleDislike = () => {
    this.setState(prevState => ({
      disliked: !prevState.disliked,
    }))
    this.setState(prevState => ({
      liked: prevState.disliked ? false : prevState.liked,
    }))
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
        const newData = {
          id: data.video_details.id,
          title: data.video_details.title,
          thumbnailUrl: data.video_details.thumbnail_url,
          videoUrl: data.video_details.video_url,
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        }

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

  successView = (addCartList, lightTheme) => {
    const {apiList, liked, disliked, save} = this.state

    const activeColor = lightTheme ? '#2563eb' : '#2563eb' // Active color for dark/light mode
    const inactiveColor = lightTheme ? '#64748b' : '#64748b' // Inactive color for dark/light mode

    return (
      <div style={{backgroundColor: lightTheme ? '#f9f9f9' : '#000000'}}>
        <VideoContainer>
          <Container>
            <ReactPlayer
              url={apiList.videoUrl}
              controls
              width="100%"
              height="100%"
            />
          </Container>
          <p style={{color: lightTheme ? '#000000' : '#ffffff'}}>
            {apiList.title}
          </p>

          <Flex style={{color: inactiveColor}}>
            <div style={{display: 'flex', marginTop: '10px'}}>
              <p>{apiList.viewCount} views .</p>
              <p style={{paddingLeft: 10}}>
                {formatDistanceToNow(new Date(apiList.publishedAt))} ago
              </p>
            </div>
            <ActionIcons>
              <button
                type="button"
                onClick={this.toggleLike}
                style={{
                  backgroundColor: lightTheme ? '#f9f9f9' : '#000000',
                  color: liked ? activeColor : inactiveColor,
                }}
              >
                <AiOutlineLike
                  style={{color: liked ? activeColor : inactiveColor}}
                />
                <button
                  type="button"
                  style={{
                    color: liked ? activeColor : inactiveColor,
                    backgroundColor: lightTheme ? '#f9f9f9' : '#000000',
                  }}
                >
                  Like
                </button>
              </button>
              <button
                type="button"
                onClick={this.toggleDislike}
                style={{
                  backgroundColor: lightTheme ? '#f9f9f9' : '#000000',
                  color: liked ? activeColor : inactiveColor,
                }}
              >
                <AiOutlineDislike
                  style={{color: disliked ? activeColor : inactiveColor}}
                />
                <button
                  type="button"
                  style={{
                    color: disliked ? activeColor : inactiveColor,
                    backgroundColor: lightTheme ? '#f9f9f9' : '#000000',
                  }}
                >
                  Dislike
                </button>
              </button>
              <button
                style={{
                  backgroundColor: lightTheme ? '#f9f9f9' : '#000000',
                  color: liked ? activeColor : inactiveColor,
                }}
                type="button"
                onClick={() => {
                  this.setState(prevState => ({
                    save: !prevState.save,
                  }))
                  if (!save) {
                    addCartList(apiList)
                  }
                }}
              >
                <CgPlayListAdd
                  style={{color: save ? activeColor : inactiveColor}}
                />
                <button
                  type="button"
                  style={{
                    color: save ? activeColor : inactiveColor,
                    backgroundColor: lightTheme ? '#f9f9f9' : '#000000',
                  }}
                >
                  Saved
                </button>
              </button>
            </ActionIcons>
          </Flex>
          <hr style={{borderColor: lightTheme ? '#e0e0e0' : '#303030'}} />
          <ProfileContainer>
            <img src={apiList.profileImageUrl} alt="channel logo" />
            <div>
              <p style={{color: lightTheme ? '#000000' : '#ffffff'}}>
                {apiList.name}
              </p>
              <p style={{color: inactiveColor}}>
                {apiList.subscriberCount} subscribers
              </p>
            </div>
          </ProfileContainer>
          <p style={{color: lightTheme ? '#606060' : '#94a3b8'}}>
            {apiList.description}
          </p>
        </VideoContainer>
      </div>
    )
  }

  failureView = () => (
    <FailureViewContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <RetryButton onClick={this.fetchData}>Retry</RetryButton>
    </FailureViewContainer>
  )

  renderView = (addCartList, lightTheme) => {
    const {status} = this.state
    switch (status) {
      case apiStatus.loading:
        return this.LoadingView(lightTheme)
      case apiStatus.success:
        return this.successView(addCartList, lightTheme)
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
          const {addCartList, lightTheme} = value

          return (
            <>
              <GlobalStyle />
              <Header />
              <div
                style={{
                  display: 'flex',
                  flexGrow: 1,
                  backgroundColor: lightTheme ? '#f9f9f9' : '#000000',
                }}
              >
                <SideBar />

                <PageContainer>
                  {this.renderView(addCartList, lightTheme)}
                </PageContainer>
              </div>
            </>
          )
        }}
      </BgContext.Consumer>
    )
  }
}

export default VideoItemDetails
