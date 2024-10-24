import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: Arial, sans-serif;
  }
`

export const BgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  width: 80vw;

  height: 250px;
  margin-bottom: 20px;

  img {
    height: 100px;
    width: 250px;
  }

  p {
    font-size: 15px;
  }

  @media (max-width: 576px) {
    height: 200px;
    padding-bottom: 20px;
    width: 100vw;
    img {
      height: 80px;
      width: 200px;
    }
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    height: 220px;
    padding-bottom: 20px;
    width: 100vw;
    img {
      height: 90px;
      width: 230px;
    }
    p {
      font-size: 15px;
    }
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: end;
  margin: 10px;
  padding: 30px;
`

export const Main = styled.div`
  padding-top: 10px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
  width: 100vw;

  @media (max-width: 576px) {
    padding: 5px;
  }
`

export const ContactUsContainer = styled.div`
  margin-top: 20px;

  h1 {
    font-size: 18px;
  }

  img {
    margin-right: 10px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const RenderItem = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#000000')};
`

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70vw;
  flex-grow: 1;
  padding: 10px;
  margin: 0;

  img {
    margin-bottom: 20px;
    width: 350px;
    height: 350px;
  }

  button {
    margin-top: 10px;
    font-size: 25px;
    padding: 5px;
  }

  @media (max-width: 576px) {
    width: 90vw;
    img {
      width: 300px;
      height: 300px;
    }
    button {
      margin-top: 10px;
      font-size: 18px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 80vw;
    img {
      width: 320px;
      height: 320px;
    }
    button {
      margin-top: 10px;
      font-size: 22px;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  gap: 20px;

  h1 {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    gap: 10px;
    h1 {
      font-size: 16px;
    }
  }
`

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 22vw;
    margin-bottom: 20px;
    margin: 10px;
    &:hover {
      background-color: #e0e0e0;
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  h1 {
    font-size: 15px;
    color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};
  }

  p {
    font-size: 10px;
    color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};
  }

  @media (max-width: 576px) {
    li {
      width: 90vw;
      padding: 0px;
      margin: 0px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    li {
      width: 90vw;
      padding: 0px;
      margin: 0px;
      margin-bottom: 10px;
    }
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 90vw;

  img {
    margin-bottom: 20px;
    width: 350px;
    height: 350px;
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: blue;
    color: #ffffff;
    border: 0px;
  }

  h1 {
    color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};
  }

  p {
    color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};
  }

  @media (max-width: 576px) {
    width: 100vw;
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media (min-width: 576px) and (max-width: 992px) {
    width: 100vw;
    img {
      width: 320px;
      height: 320px;
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  input {
    width: 250px;
    padding: 8px;
    margin: 0;
  }

  button {
    padding: 2px 10px;
    margin: 0;
  }

  @media (max-width: 576px) {
    input {
      width: 200px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    input {
      width: 220px;
    }
  }
`
