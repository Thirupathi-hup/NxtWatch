import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`
export const Overall = styled.div`
  width: 20vw;
  @media screen and (max-width: 992px) {
    display: none;
  }
`

export const SidebarLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;

  label {
    margin-left: 10px;
    color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};
  }
`

export const ContactUsContainer = styled.div`
  margin-top: 50vh;

  p {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5px;
    color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};
  }

  img {
    margin-right: 10px;
    height: 30px;
    width: 30px;
  }
`
