import ItemCard from "./itemcard"
import "../styles/home.css"

function Home({products, cart, handleChange}){

    function getQuantityById(itemsArray, targetObject) {
        const foundItem = itemsArray.find(item => item.id === targetObject.id);
        return foundItem ? foundItem.quantity : 0;
      }


    return <div className="home">
    
        {products.map((item) => {
            return <ItemCard key={item['id']} item={item} quant={getQuantityById(cart, item)} handleChange={handleChange}/>
        })}

    </div>
}

export default Home;