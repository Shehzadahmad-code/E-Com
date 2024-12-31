import React, { useContext } from "react";
import { ProductContext } from "../App";
import { useParams } from "react-router-dom";

const AddToCart = () => {
  const { cardData } = useContext(ProductContext);
  const { id } = useParams();
  const product = cardData.find((item) => item.id === parseInt(id));

//   const handleWhatsAppShare = () => {
//     const shareMessage = `Check out this product:\n\n${product.title}\nPrice: $${product.price}\n\nImage: ${product.image}`;
//     const whatsappUrl = `https://web.whatsapp.com//?text=${encodeURIComponent(shareMessage)}`;
//     window.open(whatsappUrl, "_blank");  
//   }
  return (
    <div className="min-h-screen ">
      <div className="max-w-sm m-6 p-4 bg-white border border-gray-200 rounded-lg shadow-md flex ">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-fit rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
          <div className="flex flex-col items-start justify-between mt-4">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            <button className="px-2 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300" >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
