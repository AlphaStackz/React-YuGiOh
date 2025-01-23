import { data } from "../public/data.js"
 import Card from "./Components/Card.jsx"
 import { useState } from "react"

function App() {
    const [cart,setCart] = useState([]);
    console.log(data)

    const handleAddToCart = (title)=> {
        if(!cart.find(item=> item.title==title)) { // !cart <- not !data
            setCart([...cart,{"title":title,"amount":1}])
        }
        else {
            const tempArr=[...cart]
            const amount=tempArr.findIndex(item=> item.title==title) //findIndex() is a method in React
            tempArr[amount].amount += 1
            setCart(tempArr)
        }

        console.log("added to cart")
    }
   const handleRemoveFromCart = (title)=> {
        const tempArr=[...cart]
        const amount=tempArr.findIndex(item=> item.title == title) //findIndex() is a method in React

        if(cart.length==0){
        alert("cart is already empty!!! ")
    }
        else if(cart[amount].amount <=1){
        const newCart = cart.filter((item, i) =>i !== amount )
        setCart(newCart);

     }
        else if (cart[amount].amount >1){
        const amount=tempArr.findIndex(item=> item.title==title) //findIndex() is a method in React
        tempArr[amount].amount -= 1
        setCart(tempArr)
     }
    }
  return <>
  <div id="home-page">

  <section id="yugi-section" >
      {data.map((item) => (
        <Card card={item} 
        AddToCart={handleAddToCart} 
        RemoveFromCart={handleRemoveFromCart}/>
          )
      )}
      </section>
      <section id="cart-section">
        <h2>shopping cart</h2>
        {cart.length == 0 ?
            <p>Cart is empty</p>
            :
            cart.map(
              (item, index) => <p key={item + "-" + index}>{item.title}, {item.amount}</p>
            )
        }
      </section>
      </div>
    </>
}

export default App
