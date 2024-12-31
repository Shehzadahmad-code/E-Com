import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className='bg-black   text-slate-400  bottom-0 w-full'>
         {/* <p className='flex items-center justify-center md:text-xl text-sm'>&copy; {new Date().getFullYear()} Shehzad Ahmad. All rights reserved.</p> */}
    <div className='flex md:justify-around items-start md:flex-row flex-col justify-start text-sm md:text-lg md:gap-0 gap-3'>   
    <div className='flex flex-col md:items-center items-start text-sm md:text-lg'>
    <h1 className='md:text-xl text-base'> We have this pages</h1>
        <a href="#home">Home</a>
        <a href="#about">Mens</a>
        <a href="#services">Womens</a>
        <a href="#contact">Kids</a>
    </div>
    <div className='flex flex-col md:items-center items-start'>
       <h1 className='md:text-xl text-base'> Contact</h1>
        <a href="mailto:hkrshahzad@email.com">Email</a>
        <a href="tel:+923319562690">Phone</a>
    </div>
    <div className='flex flex-col md:items-center items-start'>
        <h1 className='md:text-xl text-base'>Social Media</h1>
        <a href="https://www.facebook.com/shehzadahmad.92">Facebook</a>
        <a href="https://www.instagram.com/shehzad_ahmad/">Instagram</a>
        <a href="https://www.linkedin.com/in/shehzad-ahmad-0705381a5/">LinkedIn</a>
        <a href="https://github.com/shehzadahmad">GitHub</a>
    </div>
    </div>  
    <p className='flex items-center justify-center md:text-xl text-sm'>&copy; {new Date().getFullYear()} Shehzad Ahmad. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer
