import ItemCard from "./itemcard"

function Home({products, cart}){


    //pass current quantity in cart to card for rendering
    return <div className="home">
    
        {products.map((item) => {
            return <ItemCard key={item['id']} item={item} updateCart={cart.updateCart()}/>
        })}

    </div>
}

export default Home;