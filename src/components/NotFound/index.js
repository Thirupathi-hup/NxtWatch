import Header from '../Header'
import SideBar from '../SideBar'
import {
  GlobalStyle,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundText,
  SavedVideosPage,
} from './style'

const NotFound = () => (
  <>
    <GlobalStyle />
    <Header />
    <SavedVideosPage>
      <SideBar />
      <NotFoundContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundTitle>Page Not Found</NotFoundTitle>
        <NotFoundText>
          we are sorry, the page you requested could not be found.
        </NotFoundText>
      </NotFoundContainer>
    </SavedVideosPage>
  </>
)

export default NotFound
