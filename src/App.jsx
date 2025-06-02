import { useEffect, useState } from 'react'
import './App.css'
import NavBar from "./components/navbar";


function App() {
  const [cart, setCart] = useState([])
  //TODO: start with cart of every object, 0 quantity?

  //item = name, desc, img, price, quantity

  const updateCart = (item) => {
    if (cart.some(obj => obj['name'] === item.name)){
      updateQuantity(item)
    } else {
      addItem(item)
    }

  }

  const addItem = (item) => {
    setCart( cart => [...cart, item])
  }

  const updateQuantity = (item) => {
    newCart = cart.map((x) => {
      if (x.name == item.name){
        return {...x, quantity: item.quantity}
      } else {
        return {...x}
      }
    })

    setCart([...newCart])
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
