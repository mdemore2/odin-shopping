import ItemCard from "./itemcard"
import "../styles/home.css"

function Home({products, cart, handleChange}){

    function getQuantityById(itemsArray, targetObject) {
        // Use the .find() method to efficiently locate the item in the array.
        // The method returns the first element that satisfies the provided testing function.
        const foundItem = itemsArray.find(item => item.id === targetObject.id);
      
        // The ternary operator provides a concise way to handle the conditional return.
        // It checks if foundItem is a truthy value (i.e., not null or undefined).
        return foundItem ? foundItem.quantity : 0;
      }


    //TODO pass current quantity in cart to card for rendering
    return <div className="home">
    
        {products.map((item) => {
            return <ItemCard key={item['id']} item={item} quant={getQuantityById(cart, item)} handleChange={handleChange}/>
        })}

    </div>
}

export default Home;