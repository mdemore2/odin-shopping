import { useEffect, useState } from 'react'
import './App.css'
import NavBar from "./components/navbar";
import Home from "./components/home";
import Cart from "./components/cart";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const ShoppingCart = () => {
    // Main cart state
    const [cart, setCart] = useState([]);

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
  }

  async function fetchProducts(signal) {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {signal});

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const products = await response.json();
      console.log('Products fetched successfully:', products);
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log('Firing Effect')

    const controller = new AbortController();
    const signal = controller.signal;

    setProducts(fetchProducts(signal))
    
    return () => {
      console.log('Running cleanup')
      setProducts([]);
      controller.abort();
    };

  },[]) 



  //return home or cart depending on navbar state
  return (
    <div>
      <NavBar />
      <Home products={products} cart={ShoppingCart}/>
    </div>
  )
}

export default App;
