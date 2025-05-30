function ItemCard({item, updateCart}){
    //TODO: implement :)
    return <div className="card" id="item-id">
        <img src={imageURL} />
        <h5>Name</h5>
        <p>Description</p>
        <input type="number" onChange={updateCart}/> 
    </div>
}

export default ItemCard;