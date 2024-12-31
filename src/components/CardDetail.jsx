import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../App";

const CardDetail = () => {
  const { id } = useParams(); 
  const { cardData } = useContext(ProductContext);

  
  const product = cardData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 flex md:flex-row flex-col  gap-10">
      
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:h-auto md:max-h-[400px] h-[250px] object-contain border rounded-md shadow-md"
      />
      <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 text-sm md:text-base mt-4">
        {product.description}
      </p>
      <p className="text-gray-700 text-sm md:text-base mt-4  font-bold">
       Number of Products= {product.rating.count}
      </p>
      <p className="text-gray-700 text-sm md:text-base   font-bold">Discount = $ {product.rating.rate}</p>
      <p className="text-lg md:text-xl font-semibold mt-4">
        Price: <span className="text-blue-600">${product.price}</span>
      </p>
      <Link to={`/cart/${id}`} >
       <button className="bg-cyan-500 border rounded-xl p-3 mt-4 font-semibold text-white "> Buy Now</button> 
        {console.log('buy now',id)}
      </Link>
      </div>
    </div>
  );
};

export default CardDetail;
