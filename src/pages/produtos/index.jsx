import axios from "axios"

const Produtos = () => {
    // Objeto com a lita de pizzas
    axios.get("http://viacep.com.br/ws/01010000/json")
    .then(response=>{
            console.log(response.data)
    })    

    // Iteração da lista de pizzas
    const listaPizas = pizzas.map(pizza=><li>{pizza}</li>)
    return (
        <div>
            <ul>
                {listaPizas}
            </ul>
        </div>
    )
}

export default Produtos