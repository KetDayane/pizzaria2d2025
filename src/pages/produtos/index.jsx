const Produtos = () => {
    // Objeto com a lita de pizzas
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de Calabresa',
        'Pizza Baiana',
        'Pizza Portuguesa'
    ]
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