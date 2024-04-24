import React from 'react'
import './Thanks.css'
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from 'react-icons/bs'

const emojiData = {
  unsatisfield:<BsFillEmojiFrownFill/> ,
  neutral: <BsFillEmojiNeutralFill/>, 
  satisfield: <BsFillEmojiSmileFill/>,
  very_satisfield:<BsFillEmojiHeartEyesFill/>
}
const Tanks = ({data}) => {
  return (
    <div className='thanks-container'>
      <h2>falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você recebera um cupom de 10% de desconto para a sua próxima compra</p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default Tanks