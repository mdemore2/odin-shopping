import '../styles/itemcard.css';


function ItemCard({item}){
    //TODO: implement :)
    //onChange={updateCart}
    return <div className="card" id="item-id">
        <img src={item.image} />
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <h5>{item.price}</h5>
        <input type="number" /> 
    </div>
}

export default ItemCard;