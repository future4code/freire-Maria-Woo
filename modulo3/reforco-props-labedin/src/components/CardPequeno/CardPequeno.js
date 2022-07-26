import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className='smallcard-container'>
            <img src={props.imagem}/>
            <h4> {props.contato}</h4>
        </div>
    )
}

export default CardPequeno

