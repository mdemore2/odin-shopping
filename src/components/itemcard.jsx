import '../styles/itemcard.css';


function ItemCard({item, quant, handleChange}){
    //TODO: implement :)
    //onChange={updateCart}
    return <div className="card">
        <img src={item.image} />
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <h5>${Number.parseFloat(item.price).toFixed(2)}</h5>
        <label>Quantity:&emsp;
            <input type="number" min="0" placeholder='0' value={quant} id={item.id} onChange={handleChange}/>
        </label>
    </div>
}

export default ItemCard;