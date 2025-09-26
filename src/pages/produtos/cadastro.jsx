import axios from "axios";
import { useState, useEffect} from "react";
import './produto.css'

const CadastroProduto = () => {
    // construir o objeto JSON
    // utilizar o exios para enviar os dados para o servidor

    return (
        <div className="CadastroProduto">
            <input type="text" placeholder="0" id="id" disabled />
            <input type="text" placeholder="nome do produto" id="nome" />
            <input type="text" placeholder="descrição" id="descrição" />
            <input type="text" placeholder="tipo" id="tipo" />
            <input type="text" placeholder="0.00" id="preco" />
            <input type="text" placeholder="categoria" id="categoria_id" disabled />

            <input type="button" value="Cadastro" onClick={()=>{alert('cadastrar')}} />
        </div>
           
    )
}

export default CadastroProduto 