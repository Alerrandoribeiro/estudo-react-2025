import React from 'react'
import "./Demo1.css"
import { CgAddR } from "react-icons/cg";

function Demo1() {
  const responderclique = () => alert("Parabéns, você clicou!")

  return (
    <div className='container-demo1'>
      <button onClick={responderclique} >Clique aqui</button>
      <CgAddR size={20} color='blue' onClick={() => alert("Olha aqui piranha!")} ></CgAddR>
      <img className='imagem-demo1' src="./imagens/Developer activity-bro.svg" alt="" />

    </div>

  )
}

export default Demo1