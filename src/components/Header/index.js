import {withRouter, useLocation, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {MdHome} from 'react-icons/md'
import {FaFire, FaMoon} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {IoMdMenu, IoMdClose} from 'react-icons/io'
import {FiSun, FiLogOut} from 'react-icons/fi'
import BgContext from '../../context/BgContext'
import 'reactjs-popup/dist/index.css'
import {
  HeaderContainer,
  Logo,
  Logo1,
  IconContainer,
  PopupContainer,
  Icons,
  Overall,
  Overall1,
  SidebarLinksContainer,
  SidebarLink,
} from './style'

const Header = props => {
  const location = useLocation() // UseLocation for checking active path

  return (
    <BgContext.Consumer>
      {value => {
        const {addTheme, lightTheme} = value

        const logOut = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const isActive = path => location.pathname === path

        return (
          <div>
            {/* Desktop Version */}
            <Overall
              style={{backgroundColor: lightTheme ? '#f9f9f9' : '#0f0f0f'}}
            >
              <HeaderContainer>
                <Link to="\">
                  <Logo
                    src={
                      lightTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <IconContainer
                  style={{backgroundColor: lightTheme ? '#f9f9f9' : '#0f0f0f'}}
                >
                  <Icons
                    onClick={addTheme}
                    data-testid="theme"
                    style={{
                      backgroundColor: lightTheme ? '#f9f9f9' : '#0f0f0f',
                      color: !lightTheme ? '#f9f9f9' : '#0f0f0f',
                    }}
                  >
                    {lightTheme ? <FaMoon size={45} /> : <FiSun size={45} />}
                  </Icons>
                  <Icons
                    style={{
                      backgroundColor: lightTheme ? '#f9f9f9' : '#0f0f0f',
                    }}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </Icons>
                  <Popup
                    modal
                    trigger={
                      <Icons
                        data-testid="close"
                        type="button"
                        outline
                        style={{
                          backgroundColor: lightTheme ? '#f9f9f9' : '#0f0f0f',
                          color: lightTheme ? '#4f46e5' : '#f9f9f9',
                        }}
                      >
                        Logout
                      </Icons>
                    }
                  >
                    {close => (
                      <PopupContainer>
                        <p style={{paddingBottom: 20}}>
                          Are you sure, you want to logout
                        </p>
                        <button
                          type="button"
                          onClick={() => close()}
                          style={{
                            height: 40,
                            borderColor: 'white',
                            marginRight: '20px',
                            padding: 5,
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={logOut}
                          style={{
                            height: 40,
                            backgroundColor: 'blue',
                            border: 0,
                            padding: 5,
                            color: 'white',
                          }}
                        >
                          Confirm
                        </button>
                      </PopupContainer>
                    )}
                  </Popup>
                </IconContainer>
              </HeaderContainer>
            </Overall>

            {/* Mobile Version */}
            <Overall1
              style={{backgroundColor: lightTheme ? '#f9f9f9' : '#0f0f0f'}}
            >
              <HeaderContainer>
                <Logo1
                  src={
                    lightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="nxt watch logo"
                  small
                />
                <IconContainer
                  style={{backgroundColor: lightTheme ? '#f9f9f9' : '#0f0f0f'}}
                >
                  <Icons
                    onClick={addTheme}
                    style={{
                      backgroundColor: lightTheme ? '#f9f9f9' : '#0f0f0f',
                      color: !lightTheme ? '#f9f9f9' : '#0f0f0f',
                    }}
                  >
                    {lightTheme ? <FaMoon size={25} /> : <FiSun size={25} />}
                  </Icons>

                  <Popup
                    modal
                    trigger={
                      <IoMdMenu
                        size={28}
                        style={{
                          marginTop: '10px',
                          color: lightTheme ? '#000000' : '#ffffff',
                        }}
                      />
                    }
                  >
                    {close => (
                      <PopupContainer>
                        <button
                          type="button"
                          onClick={() => close()}
                          data-testid="close"
                        >
                          <IoMdClose />
                        </button>
                        <SidebarLinksContainer lightTheme={lightTheme}>
                          <ul>
                            <li>
                              <SidebarLink
                                to="/"
                                lightTheme={lightTheme}
                                active={isActive('/') ? true : undefined}
                              >
                                <MdHome
                                  size={25}
                                  color={isActive('/') ? 'red' : 'blue'}
                                />
                                <label htmlFor="home">Home</label>
                              </SidebarLink>
                            </li>
                            <li>
                              <SidebarLink
                                to="/trending"
                                lightTheme={lightTheme}
                                active={
                                  isActive('/trending') ? true : undefined
                                }
                              >
                                <FaFire
                                  size={25}
                                  color={isActive('/trending') ? 'red' : 'blue'}
                                />
                                <label htmlFor="trending">Trending</label>
                              </SidebarLink>
                            </li>
                            <li>
                              <SidebarLink
                                to="/gaming"
                                lightTheme={lightTheme}
                                active={isActive('/gaming') ? true : undefined}
                              >
                                <SiYoutubegaming
                                  size={25}
                                  color={isActive('/gaming') ? 'red' : 'blue'}
                                />
                                <label htmlFor="gaming">Gaming</label>
                              </SidebarLink>
                            </li>
                            <li>
                              <SidebarLink
                                to="/saved-videos"
                                lightTheme={lightTheme}
                                active={
                                  isActive('/saved-videos') ? true : undefined
                                }
                              >
                                <CgPlayListAdd
                                  size={25}
                                  color={
                                    isActive('/saved-videos') ? 'red' : 'blue'
                                  }
                                />
                                <label htmlFor="saved-videos">
                                  Saved videos
                                </label>
                              </SidebarLink>
                            </li>
                          </ul>
                        </SidebarLinksContainer>
                      </PopupContainer>
                    )}
                  </Popup>

                  <Popup
                    modal
                    trigger={
                      <FiLogOut
                        data-testid="close"
                        size={25}
                        style={{
                          color: lightTheme ? '#000000' : '#ffffff',
                          margin: 12,
                        }}
                      />
                    }
                  >
                    {close => (
                      <PopupContainer>
                        <p style={{paddingBottom: 20}}>
                          Are you sure, you want to logout
                        </p>
                        <button
                          type="button"
                          onClick={() => close()}
                          style={{
                            height: 40,
                            borderColor: 'white',
                            marginRight: '20px',
                            padding: 5,
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={logOut}
                          style={{
                            height: 40,
                            backgroundColor: 'blue',
                            border: 0,
                            padding: 5,
                            color: 'white',
                          }}
                        >
                          Confirm
                        </button>
                      </PopupContainer>
                    )}
                  </Popup>
                </IconContainer>
              </HeaderContainer>
            </Overall1>
          </div>
        )
      }}
    </BgContext.Consumer>
  )
}

export default withRouter(Header)
