import ItemCard from "./itemcard"
import "../styles/home.css"

function Home({products, cart, handleChange}){


    //pass current quantity in cart to card for rendering
    //TODO pass updateCart to ItemCard for onEvent
    return <div className="home">
    
        {products.map((item) => {
            return <ItemCard key={item['id']} item={item} handleChange={handleChange}/>
        })}

    </div>
}

export default Home;