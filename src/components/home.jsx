function Home({items}){
    return <div className="home">
        {items.map((item) => {
            return <Card key={item['id']} item={item} updateCart={updateCart}/>
        })}

    </div>
}

export default Home;