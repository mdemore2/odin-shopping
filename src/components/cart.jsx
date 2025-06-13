function Cart({products, cart, handleChange}){
    return <div className="cart">

        {cart.map((item) => {
            return <div key={item.id}>
                    <p>{item.id}</p><p>{item.quantity}</p>
                </div>
        })}

    </div>
}

export default Cart;