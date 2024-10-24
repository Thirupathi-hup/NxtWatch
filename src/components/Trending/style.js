import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
  }
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#000000')};
  flex-grow: 1; /* Ensure it grows to fill available space */
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  margin-bottom: 20px;

  p {
    font-size: 24px;
    margin-left: 10px;
    padding: 25px;
    color: ${props => (!props.lightTheme ? '#ffffff' : '#000000')};
  }
`

export const VideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const VideoItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 20px;

  img {
    width: 30vw;
    border-radius: 8px;
    margin-right: 20px;
  }

  h1 {
    font-size: 28px;
    margin: 10px 0;
    color: ${props => (!props.lightTheme ? '#ffffff' : '#000000')};
  }

  p {
    font-size: 24px;
    color: ${props => (!props.lightTheme ? '#94a3b8' : '#475569')};
  }

  @media (max-width: 576px) {
    flex-direction: column;

    img {
      margin-right: 0;
      margin-bottom: 10px;
      width: 90vw;
      align-self: stretch;
    }

    h1,
    p {
      font-size: 20px;
    }
  }

  @media (min-width: 576px) and (max-width: 992px) {
    flex-direction: column;

    img {
      margin-right: 0;
      margin-bottom: 10px;
      width: 90vw;
      align-self: stretch;
    }

    h1,
    p {
      font-size: 20px;
    }
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`

export const FailureViewContainer = styled.div`
  text-align: center;
  width: 90vw;
  padding-top: 15vh;

  img {
    width: 300px;
  }

  h1 {
    font-size: 24px;
    margin-top: 20px;
    color: ${props => (!props.lightTheme ? '#ffffff' : '#000000')};
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: ${props => (!props.lightTheme ? '#ffffff' : '#000000')};
  }
`

export const RetryButton = styled.button`
  padding: 10px 20px;
  background-color: #0b69ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #084fcc;
  }
`
