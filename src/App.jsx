import { useEffect, useState } from 'react'
import './App.css'
import NavBar from "./components/navbar";
import Home from "./components/home";
import Cart from "./components/cart";
import { BrowserRouter, Route } from 'react-router-dom';

function App({page}) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);
    
  const handleChange = (e) => {
    console.log(e.target.id)
    console.log(e.target.value)
  }

    // Add item to cart
  const addToCart = (product) => {
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    if (existingItemIndex >= 0) {
      // If product exists, increase quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1
      };
      setCart(updatedCart);
    } else {
      // If product doesn't exist, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
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
