function ItemCard({item, updateCart}){
    //TODO: implement :)
    return <div className="card" id="item-id">
        <img src={item.image} />
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <h5>{item.price}</h5>
        <input type="number" onChange={updateCart}/> 
    </div>
}

export default ItemCard;