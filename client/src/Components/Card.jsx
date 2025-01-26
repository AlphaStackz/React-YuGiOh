import React from 'react'

const Card = ({card,AddToCart,RemoveFromCart}) => {
 const {id,title,attribute,lore,imageUrl} =card
  return (
        <div key={id}>
              <h3>{title}</h3>
              <p>{lore}</p>
              <h2>attribute:{attribute}</h2>
              <img src={imageUrl} alt={title} width={"240px"} height={"300px"}/>
              <button onClick={()=>AddToCart(title)}>Add to cart</button>
              <button onClick={()=>RemoveFromCart(title)}>Remove from cart</button>

          </div>
  )
}

export default Card