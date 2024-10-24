import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type:none;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-grow: 1;

  h1 {
    font-size: 24px;
    margin-left: 10px;
    padding: 25px;
    margin-top: 20px;
    color: ${props => (!props.lightTheme ? '#ffffff' : '#000000')};
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 20px;
    }
  }
`

export const SavedVideosPage = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  text-align: center;
  padding: 20px;
  @media (max-width: 992px) {
    width: 100vw;
  }
`

export const NotFoundImage = styled.img`
  width: 250px;

  margin-bottom: 20px;

  @media (max-width: 576px) {
    width: 80%;
  }
`

export const NotFoundTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`

export const NotFoundText = styled.p`
  font-size: 1.2rem;
  color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`

export const VideosList = styled.ul`
  list-style-type: none;

  padding: 0;
  margin: 0;
`

export const VideoItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${props => (props.lightTheme ? '#d7dfe9' : '#000000')};
  width: 100vw;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 15px;
    margin-bottom: 15px;
    width: 90vw;
  }
`

export const VideoThumbnail = styled.img`
  width: 30vw;
  height: 100%;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;

  @media (max-width: 576px) {
    width: 80vw;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    margin-bottom: 5px;
    color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  }

  p,
  span {
    font-size: 15px;
    margin-bottom: 3px;
    color: ${props => (props.lightTheme ? '#1e293b' : '#f1f5f9')};
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`
