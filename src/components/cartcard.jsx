import '../styles/itemcard.css';


function CartCard({product, quant }){

    return <div className="cartCard">
        <img src={product.image} />
        <h5>{product.title}</h5>
        <h5>${Number.parseFloat(product.price).toFixed(2)}</h5>
        <h5>{quant}</h5>
    </div>
}

export default CartCard;