import React, { useState } from 'react'
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import "./Demo2.css"


const Demo2 = () => {
    const [valor, setValor] = useState(0);
    const [usuario, setUsuario] = useState(0);
  return (
    <div className='container-demo2'>
        <h2>Somar</h2>
        <BsCaretUpFill onClick={() => {setValor(valor+1)}} size={30}/>
         {valor}
        <BsCaretDownFill size={30} onClick={() => {setValor(valor-1)}} />
            <h2>Subtrair</h2>
            

            <button onClick={() => {setUsuario(prompt('Digite seu nome:'))

}}>Fazer login</button>
{usuario && <p>{usuario}!</p>}
        
    </div>
  )
}

export default Demo2;