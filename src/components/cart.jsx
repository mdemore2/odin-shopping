import CartCard from './cartcard'

function Cart({products, cart, handleChange}){

    let total = 0;
    function findProduct(item_id) {
        const foundProduct = products.find(product => product.id === item_id);
        return foundProduct
    }

    return <div className="cart">

        {cart.map((item) => {
            total += item.quantity * item.price;
            return <CartCard key={item.id} product={findProduct(item.id)} quant={item.quantity}/>
        })}

        <h3>Total: ${Number.parseFloat(total).toFixed(2)}</h3>

    </div>
}

export default Cart;