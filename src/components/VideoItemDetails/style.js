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
  padding: 20px;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
`

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 24px;
    margin-left: 10px;
  }
`

export const VideoContainer = styled.div`
  width: 80vw;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    margin-top: 20px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`
export const Container = styled.div`
  height: 100%;

  width: 70vw;
  @media (max-width: 576px) {
    width: 90vw;
    height: 200px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 85vw;
    height: 250px;
  }
`

export const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  svg {
    font-size: 24px;
    margin-right: 10px;
  }

  label {
    margin-right: 20px;
    font-size: 18px;
    cursor: pointer;
  }
  button {
    border: 0px;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0;
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
  img {
    width: 300px;
  }

  h1 {
    font-size: 24px;
    margin-top: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
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
