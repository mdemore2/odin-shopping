import ItemCard from "./itemcard"
import "../styles/home.css"

function Home({products, cart, handleChange}){


    //TODO pass current quantity in cart to card for rendering
    return <div className="home">
    
        {products.map((item) => {
            return <ItemCard key={item['id']} item={item} handleChange={handleChange}/>
        })}

    </div>
}

export default Home;