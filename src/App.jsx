import { useEffect, useState } from 'react'
import './App.css'
import NavBar from "./components/navbar";


function App() {
  const [cart, setCart] = useState([])

  //item = name, desc, img, price, quantity

  const addToCart = (item) => {
    setCart(cart => [...cart, item])
  }

  const emptyCart = () => {
    setCart([])
  }

  //return home or cart depending on navbar state
  return (
    <div>
      <NavBar />
      
    </div>
  )
}

export default App
