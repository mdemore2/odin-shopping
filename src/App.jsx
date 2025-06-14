import { useEffect, useState } from 'react'
import './App.css'
import NavBar from "./components/navbar";
import Home from "./components/home";
import Cart from "./components/cart";
import { BrowserRouter, Route } from 'react-router-dom';

function App({page}) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);
    
  //TODO: does cart contain entire product object or just id and quantity?
  const handleChange = (e) => {
    let product = products.find(x => x.id == e.target.id)

    if (e.target.value == 0){
      removeFromCart(e.target.id)
      console.log('remove from cart')
    } else {
      updateCart(product, e.target.value)
    }
    console.log(e.target.id)
    //console.log(product)
    console.log(e.target.value)

    console.log(cart)
  }

  const updateCart = (product, newQuantity) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    if (existingItemIndex >= 0) {
      const updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
    } else {
      // If product doesn't exist, add it with quantity
      setCart([...cart, { ...product, quantity: newQuantity }]);
    }
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id != productId)
    setCart(updatedCart);
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate cart subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get total number of items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };


  async function fetchProducts(signal) {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {signal} );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Products fetched successfully:', data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }


  useEffect(() => {
    console.log('Firing Effect')

    const controller = new AbortController();
    const signal = controller.signal;
    fetchProducts(signal);
    //console.log('Products set successfully:', products)

    
    return () => {
      console.log('Running cleanup')
      controller.abort();
    };

  },[]) //nothing in dependency array, only run on mount



  //return home or cart depending on navbar state
  if (page == "cart"){
    return (
    <div>
      <NavBar />
      <Cart products={products} cart={cart} handleChange={handleChange}/>
    </div>
  )

  } else {
    return (
    <div>
      <NavBar />
      <Home products={products} cart={cart} handleChange={handleChange}/>
    </div>
  )

  }
  
}

export default App;
