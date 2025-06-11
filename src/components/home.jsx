import ItemCard from "./itemcard"

function Home({products, cart}){


    //pass current quantity in cart to card for rendering
    //TODO pass updateCart to ItemCard for onEvent
    return <div className="home">
    
        {products.map((item) => {
            return <ItemCard key={item['id']} item={item} />
        })}

    </div>
}

export default Home;