import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 20px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`

export const SidebarLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.lightTheme ? '#181818' : '#000000')};

  li {
    list-style-type: none;
  }
`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;

  label {
    margin-left: 10px;
    color: ${props => (props.lightTheme ? '#181818' : '#000000')};
  }
`

export const Logo = styled.img`
  height: 80px;
`

export const Logo1 = styled.img`
  height: 30px;
  margin-top: 25px;
`

export const Overall = styled.div`
  background-size: cover;

  padding: 10px 20px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`

export const Overall1 = styled.div`
  background-size: cover;

  padding: 10px 20px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const Icons = styled.button`
  border: 0;
  font-size: 20px;
  margin-left: 10px;
  text-align: center;
  padding: 10px 20px;
  height: ${props => (props.outline ? '50px' : 'auto')};
  border: ${props => (props.outline ? '2px solid blue' : 'none')};

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 8px 16px;
  }

  img {
    height: 50px;
    width: 50px;

    @media screen and (max-width: 768px) {
      height: 40px;
      width: 40px;
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const PopupContainer = styled.div`
  height: 150px;
  text-align: center;
  font-size: 20px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    height: 180px;
    font-size: 18px;
  }
`
