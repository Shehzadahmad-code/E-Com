import React, { useContext, useEffect, useState } from 'react'
import CardItem from './CardItem'
import { ProductContext } from '../App'
const CardsComp = () => {
  // const [cardData,setCardData]=useState()
  // useEffect(()=>{
  //   const fatchdata= fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(json=>setCardData(json))

  // },[])
  const {cardData, search}= useContext(ProductContext);
  return (
    <div className=' w-screen mt-6 '>
      <div className='flex flex-col justify-start items-center  p-6 overflow-hidden border rounded-xl'>
        <h1 className='text-2xl font-bold'>CHOSSE THE PRODUCT </h1>
        <p className='text-xl'>Easy returns, fast delivery, and exceptional customer service</p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-center">
        {cardData.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))?.
        map((data)=>{
          return <CardItem key={data.id} data={data} />  
        })}       

      </div>
    </div>
  )
}

export default CardsComp
