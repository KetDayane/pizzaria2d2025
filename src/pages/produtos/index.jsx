// Ferramenta de consumo de rotas ou endpoints do backend
import axios from "axios"
// Hooks do react para controlar estados e renderização
import {useState, useEffect} from "react"
const Produtos = () => {
    // estado com lista de pizzas
    const [pizzas, setPizzas] = useState([])
    // Objeto com a lita de pizzas
    useEffect(()=>{
        // GET- busca ps dados da rota ou endpoint 
        // then - método assincrono, espera o retorno da requisição 
        // catch - tratamento de erros da requisição
        axios.get("http://viacep.com.br/ws/01010000/json")
        .then(response=>{
            console.log(response.data.data)
            setPizzas(response.data.data)
        })
        .catch(errors=>console.log(errors))
    }, [])
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