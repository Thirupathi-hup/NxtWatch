import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  Container,
  LogoContainer,
  FormContainer,
  Input,
  Label,
  Button,
  ErrorMessage,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
} from './style'

class Login extends Component {
  state = {userName: '', passWord: '', showPassword: false, errMsg: ''}

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passWord: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  submitData = async event => {
    event.preventDefault()

    const {userName, passWord} = this.state
    const userDetails = {username: userName, password: passWord}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: data.error_msg})
    }
  }

  render() {
    const {userName, passWord, showPassword, errMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Container>
        <LogoContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </LogoContainer>
        <FormContainer>
          <form onSubmit={this.submitData}>
            <Label htmlFor="name">USERNAME</Label>
            <Input
              placeholder="Username"
              value={userName}
              id="name"
              onChange={this.onChangeName}
            />
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              placeholder="Password"
              value={passWord}
              id="password"
              type={showPassword ? 'text' : 'password'}
              onChange={this.onChangePassword}
            />
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="control"
                onChange={this.onToggleShowPassword}
                checked={showPassword}
              />
              <CheckboxLabel htmlFor="control">Show Password</CheckboxLabel>
            </CheckboxContainer>
            <Button type="submit">Login</Button>
          </form>
          {errMsg && <ErrorMessage>{errMsg}</ErrorMessage>}
        </FormContainer>
      </Container>
    )
  }
}

export default Login
