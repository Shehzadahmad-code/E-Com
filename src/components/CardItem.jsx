import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
// import { ProductContext } from '../App';

const CardItem = ({data}) => {
  
  return (
    <div className="md:w-[20vw] w-[85%]  border rounded-md shadow-lg hover:border-blue-500 transition-all duration-300 cursor-pointer mb-7 shrink-0" title="click to Buy" >
      <div className='flex items-center justify-center'>
      <Link to={`/${data.id}`}>
      <img 
        src={data.image} 
        alt={data.title} 
        className="w-[80%] md:h-[145px] h-[195px] object-contain "  
      /> 
      </Link>
      </div>
      <div className=" bg-gray-100 md:w-full">
        <h3 className="md:text-md text-sm font-bold line-clamp-3 block " title={data.title}>
          {data.title}...
        </h3>
        {/* <p className="line-clamp-3 overflow-hidden">{data.description}...</p> */}
        <p className="font-bold text-red-500">${data.price}</p>
      </div>
    </div>
  );
};

export default CardItem;
