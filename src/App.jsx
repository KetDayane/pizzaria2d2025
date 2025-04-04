import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  const Formulario = () => {

    return (
      <>
    
      <h3>Formulário</h3>

      <input 
      className="nome"
      onChange= {(e)=>{setNome(e.target.value)}}
      type="text"/>

      <button
      className="botao"
      onClick={()=>{alert(nome)}}>
        alert('O nome digitado foi ' + nome)
    
     CLIQUE AQUI
     </button>
       
     </>
  
  )
}

return (
  <div>
    <h3>Pizzaria 2D</h3>
    <p>texto do paragráfo</p>
    <img src={} />

    <formulario />
    <formulario />
    <formulario />
    <formulario />

  </div>
)
}
export default App