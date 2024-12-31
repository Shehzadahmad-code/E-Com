import React, { useContext } from 'react'
import Banner from '../assets/mensBinner.jpg'
import CardItem from './CardItem'
import { ProductContext } from '../App'
const Mens = () => {
  const {cardData,search}=useContext(ProductContext)
  return (
    <div className='min-h-screen m-4'>
      <div className={`${search? 'sm:hidden': 'h-[30vw] m-8 md:bg-cover bg-contain bg-scroll  bg-fit bg-[34px]'}`} style={{ backgroundImage: `url(${Banner})`}}> </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-center m-6">
        {
          cardData.filter((data)=>data.category === "men's clothing" 
          ).filter((val)=>val.title.toLowerCase().includes(search.toLowerCase())).map((fdata)=>{
             return <CardItem key={fdata.id} data={fdata} />
          })
        }

      </div>
      
    </div>
  )
}

export default Mens
