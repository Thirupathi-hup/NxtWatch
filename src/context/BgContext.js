import React from 'react'

const BgContext = React.createContext({
  cartList: [],
  lightTheme: true,
  addTheme: () => {},
  addCartList: () => {},
  deleteItem: () => {},
})

export default BgContext
