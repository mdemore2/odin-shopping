import '../styles/itemcard.css';


function ItemCard({item}){
    //TODO: implement :)
    //onChange={updateCart}
    return <div className="card" id="item-id">
        <img src={item.image} />
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <h5>${Number.parseFloat(item.price).toFixed(2)}</h5>
        <label>Quantity:  
            <input type="number" placeholder='0' />
        </label>
    </div>
}

export default ItemCard;