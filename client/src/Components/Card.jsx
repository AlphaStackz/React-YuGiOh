import React from 'react'

const Card = ({card,AddToCart,RemoveFromCart}) => {
 const {id,title,attribute,lore,imageUrl} =card
  return (
        <div key={id}>
              <h3>{title}</h3>
              <p>{lore}</p>
              <img src={imageUrl} alt={title} width={"240px"} height={"300px"}/>
              {/* make it optional prorps and pass it just if AddToCart props requested */}
              {AddToCart &&<button onClick={()=>AddToCart(title)}>Add to cart</button>} 
              {/* make it optional prorps and pass it just if RemoveFromCart props requested */}
              {RemoveFromCart &&<button onClick={()=>RemoveFromCart(title)}>Remove from cart</button>}

          </div>
  )
}

export default Card