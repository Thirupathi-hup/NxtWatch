import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`

export const LogoContainer = styled.div`
  margin-bottom: 20px;
`

export const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 10px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

export const Checkbox = styled.input`
  margin-right: 10px;
`

export const CheckboxLabel = styled.label`
  font-size: 14px;
`
