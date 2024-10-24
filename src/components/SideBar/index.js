import {MdHome} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {useLocation} from 'react-router-dom'
import BgContext from '../../context/BgContext'

import {
  SidebarContainer,
  SidebarLinksContainer,
  SidebarLink,
  ContactUsContainer,
  Overall,
} from './style'

const SideBar = () => {
  const location = useLocation()

  return (
    <BgContext.Consumer>
      {value => {
        const {lightTheme} = value

        // Set the active path based on the current location
        const isActive = path => location.pathname === path

        return (
          <Overall
            style={{backgroundColor: !lightTheme ? '#181818' : '#f9f9f9'}}
          >
            <SidebarContainer>
              <SidebarLinksContainer>
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
                      active={isActive('/trending') ? true : undefined}
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
                      active={isActive('/saved-videos') ? true : undefined}
                    >
                      <CgPlayListAdd
                        size={25}
                        color={isActive('/saved-videos') ? 'red' : 'blue'}
                      />
                      <label htmlFor="saved-videos">Saved videos</label>
                    </SidebarLink>
                  </li>
                </ul>
              </SidebarLinksContainer>
              <ContactUsContainer lightTheme={lightTheme}>
                <p>CONTACT US</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </ContactUsContainer>
            </SidebarContainer>
          </Overall>
        )
      }}
    </BgContext.Consumer>
  )
}

export default SideBar
