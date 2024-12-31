import React, { createContext, Suspense } from "react";
import CardsComp from "./components/CardsComp";
import Direction from "./components/Direction";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Sider";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Mens from "./components/Mens";
// import Womens from "./components/Womens";
// import Elect from "./components/Elect";
import { use } from "react";
import CardDetail from "./components/CardDetail";
import AddToCart from "./components/AddToCart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Mens=React.lazy(()=>import('./components/Mens') )
const Womens=React.lazy(()=>import('./components/Womens') )
const Elect=React.lazy(()=>import('./components/Elect') )


export const ProductContext = createContext();
export default function App() {
  const [cardData, setCardData] = useState([]);
  const [search,setSearch]=useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setCardData(data); // Set the entire list of products
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch product data

   
    
  }, []);
  const handleSearch=(value) => {
    setSearch(value);
    
  }
  console.log(cardData.id);

  return (
    <ProductContext.Provider value={{ cardData , search }}>
      <div>
        <Navbar onSearch={handleSearch} />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <Slider />
                    <CardsComp />
                    <Direction />
                  </div>
                }
              />
              <Route path="/mens" element={<Mens />} />
              <Route path="/women" element={<Womens />} />
              <Route path="/electronic" element={<Elect />} />
              <Route path='/:id' element={<CardDetail />} />
              <Route path='/cart/:id' element={<AddToCart/>} />
              <Route path='/login' element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
            </Routes>
            </Suspense>
        </main>
        <Footer />
      </div>
    </ProductContext.Provider>
  );
}
