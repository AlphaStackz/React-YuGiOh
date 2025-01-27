import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../public/data'
import Card from '../Components/Card'
const ItemDetails = () => {

    const {id}=useParams(); 
    const item = data.find(item => item.id === parseInt(id));
  return (
    <>
    {/* used same cards component and thats the power of reuseable component in react */}
    <Card card={item} 
    /></>
  )
}

export default ItemDetails