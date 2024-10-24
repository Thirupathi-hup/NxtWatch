import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import BgContext from './context/BgContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {lightTheme: true, cartList: []}

  addTheme = () => {
    this.setState(prevState => ({
      lightTheme: !prevState.lightTheme,
    }))
  }

  addCartList = data => {
    const {cartList} = this.state
    const isItemInList = cartList.some(each => each.id === data.id)
    if (!isItemInList) {
      this.setState(prevState => ({
        cartList: [...prevState.cartList, data],
      }))
    } else {
      console.log('Item is already in the cartList')
    }
  }

  deleteItem = id => {
    const {cartList} = this.state
    const data = cartList.filter(each => each.id !== id)
    this.setState({cartList: data})
  }

  render() {
    const {cartList, lightTheme} = this.state
    return (
      <BgContext.Provider
        value={{
          lightTheme,
          deleteItem: this.deleteItem,
          cartList,
          addTheme: this.addTheme,
          addCartList: this.addCartList,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </BgContext.Provider>
    )
  }
}

export default App
