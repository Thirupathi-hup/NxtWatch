import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #fff;
  width: 90vw;
`
export const SavedVideosPage = styled.div`
  display: flex;
  min-height: 100vh;
`

export const NotFoundImage = styled.img`
  width: 300px;
  max-width: 100%;
  margin-bottom: 20px;
`

export const NotFoundTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`

export const NotFoundText = styled.p`
  font-size: 1.2rem;
  color: #666;
`
