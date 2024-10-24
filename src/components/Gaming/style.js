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
export const Container = styled.div`
  background-color: ${props => (props.lightTheme ? '#f1f5f9' : '#000000')};
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
    hight: 350px;
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
`
export const VideoList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin: 0;
`

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#f1f1f1' : '#000000')};
  border-radius: 8px;
  padding: 15px;
  width: 280px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h1 {
    font-size: 18px;
    margin: 10px 0;
    text-align: center;
    color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  }

  p {
    font-size: 14px;
    color: ${props => (props.lightTheme ? '#475569' : '#7e858e')};
  }

  &:hover {
    box-shadow: 0 4px 8px;
  }
`
export const Headers = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-item: center;
  padding: 20px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  p {
    font-size: 25px;
    margin-top: 20px;
  }
`
