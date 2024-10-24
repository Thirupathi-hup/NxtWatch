import {Link} from 'react-router-dom'
import {CgPlayListAdd} from 'react-icons/cg'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineDelete} from 'react-icons/ai'
import {
  GlobalStyle,
  SavedVideosPage,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundText,
  HeadingContainer,
  VideosList,
  VideoItem,
  VideoThumbnail,
  VideoDetails,
} from './style'
import Header from '../Header'
import SideBar from '../SideBar'
import BgContext from '../../context/BgContext'

const SavedVideos = () => (
  <BgContext.Consumer>
    {value => {
      const {cartList, lightTheme, deleteItem} = value

      const renderView = () => (
        <div lightTheme={lightTheme} style={{width: '100vw'}}>
          <HeadingContainer lightTheme={lightTheme}>
            <CgPlayListAdd
              style={{
                marginTop: 25,
                borderRadius: 100,
                backgroundColor: lightTheme ? '#e2e8f0' : '#1e293b',
                height: 60,
                width: 70,
                textAlign: 'center',
                padding: 10,
                color: 'red',
              }}
            />
            <h1>Saved Videos</h1>
          </HeadingContainer>
          <VideosList>
            {cartList.map(each => (
              <VideoItem key={each.id} lightTheme={lightTheme}>
                <Link to={`/videos/${each.id}`}>
                  <VideoThumbnail
                    src={each.thumbnailUrl}
                    alt="video thumbnail"
                  />
                </Link>
                <VideoDetails lightTheme={lightTheme}>
                  <p>{each.title}</p>
                  <p>{each.name}</p>
                  <p>{each.viewCount} views</p>
                  <p>{formatDistanceToNow(new Date(each.publishedAt))}ago</p>

                  <span style={{color: 'blue'}}>
                    <AiOutlineDelete
                      size={25}
                      onClick={() => {
                        deleteItem(each.id)
                      }}
                    />
                    Delete
                  </span>
                </VideoDetails>
              </VideoItem>
            ))}
          </VideosList>
        </div>
      )

      const emptyView = () => (
        <NotFoundContainer
          style={{
            backgroundColor: lightTheme ? '  #ffffff' : '#000000',
            height: '100vh',
          }}
        >
          <NotFoundImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NotFoundTitle lightTheme={lightTheme}>
            No Saved Videos Found
          </NotFoundTitle>
          <NotFoundText lightTheme={lightTheme}>
            You can save your videos while watching them
          </NotFoundText>
        </NotFoundContainer>
      )

      return (
        <>
          <GlobalStyle />
          <Header />
          <SavedVideosPage>
            <SideBar />
            <div style={{backgroundColor: lightTheme ? '#cbd5e1' : '#000000'}}>
              {cartList.length === 0 ? emptyView() : renderView()}
            </div>
          </SavedVideosPage>
        </>
      )
    }}
  </BgContext.Consumer>
)

export default SavedVideos
