import React from 'react'
import { Link } from 'react-router-dom';
import SideImage from '../assets/SideImage.png';

const SignUp = () => {
  return (
    <div className="md:flex  w-screen mb-4 ">
         <div className="w-screen md:w-[50%] md:h-[35vw] ">
           <img
             src={SideImage}
             alt="SideImage"
             className="w-full h-full object-fit"
           />
         </div>
         <div className="w-full max-w-sm mx-auto mt-2 py-3 px-6 bg-white border rounded-lg shadow">
           <h1 className="text-2xl font-bold text-center mb-2">
             Create an account
           </h1>
           <p className="text-sm text-start text-gray-600 mb-6">
             Enter your details below
           </p>
   
           <form className="space-y-2">
             <input
               type="text"
               placeholder="Name"
               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
             />
   
             <input
               type="email"
               placeholder="Email or Phone Number"
               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
             />
   
             <input
               type="password"
               placeholder="Password"
               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
             />
   
             <button
               type="submit"
               className="w-full py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
             >
               Create Account
             </button>
           </form>
   
           <div className="flex items-center my-4">
             <div className="border-t border-gray-300 flex-grow"></div>
             <span className="px-4 text-sm text-gray-600">OR</span>
             <div className="border-t border-gray-300 flex-grow"></div>
           </div>
   
           <button
             type="button"
             onClick={() => window.location.href = "https://localhost:5173/login-with-google"}
             className="w-full py-2 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
           >
             <img
               src="https://img.icons8.com/color/24/google-logo.png"
               alt="Google"
               className="mr-2"
             />
             Sign up with Google
           </button>
   
           <p className="text-sm text-center text-gray-600 mt-6">
             Already have an account?
             <Link to="/login" className="text-red-500 hover:underline">
               Log in
             </Link>
           </p>
         </div>
   
         <div></div>
       </div>
     );
}

export default SignUp
