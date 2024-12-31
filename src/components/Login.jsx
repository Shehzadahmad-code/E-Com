import React from "react";
import SideImage from "../assets/SideImage.png";
const Login = () => {
  return (
    <div className="md:flex w-screen  mb-4 ">
      <div className="md:w-[50%] md:h-[35vw] w-full">
        <img
          src={SideImage}
          alt="SideImage"
          className="w-full h-full object-fit"
        />
      </div>
      <div class="w-full max-w-sm mx-auto mt-10 p-6 bg-white border rounded-lg shadow">
  <h1 class="text-2xl font-bold text-center mb-4">Log in to Exclusive</h1>
  <p class="text-sm text-center text-gray-600 mb-6">Enter your details below</p>

  <form class="space-y-4">
    <input 
      type="email" 
      placeholder="Email or Phone Number" 
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
    />

    <input 
      type="password" 
      placeholder="Password" 
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
    />

    <button 
      type="submit" 
      class="w-full py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500">
      Log In
    </button>
  </form>

  <div class="flex justify-between items-center mt-4">
    <a href="#" class="text-sm text-red-500 hover:underline">
      Forget Password?
    </a>
  </div>
</div>

    </div>
  );
};

export default Login;
