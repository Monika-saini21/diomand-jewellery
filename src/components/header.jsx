import React from 'react'

import Slider from "react-slick"
import"slick-carousel/slick/slick.css"
import"slick-carousel/slick/slick-theme.css"
import header from '../assets/header.jpg'
import headera from '../assets/headera.jpg'
import combined from '../assets/combined.jpg'
import { Link,  } from 'react-router-dom'

// import datas from "./datas.js"
function Header(){
    const settings ={
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
        autolaySpeed:2000,
    };
    return(
        <div className=' flex justify-center' >
            <Slider className=' w-[95vw]'{...settings}>
                <div className=''>
          
            <img className=' w-[100vw] h-[45vw]  ' src={header} alt="" />
           
            <Link to={'/card'}><button class=' hover:scale-105 duration-500 left-25 cursor-pointer p-1 border-1 border-b-1
             border-yellow-600 text-yellow-600 text-2xl border-x-1 w-45 relative bottom-30 font-serif  hover:bg-gray-300 ...' >Shop now  </button></Link> 
       </div>
       <div><img className=' w-[100vw] h-[45vw] ' src={combined} alt="" />
       <Link to={'/card'}><button class=' hover:scale-105 duration-500 left-25 cursor-pointer p-1 border-1 border-b-1
        border-yellow-600 text-yellow-600 text-2xl border-x-1 w-45 relative bottom-60 font-serif  hover:bg-gray-300 ...' >Shop now  </button></Link> 
       </div>
       <div><img className=' w-[100vw] h-[45vw]  ' src={headera} alt="" /> 
       <Link to={'/card'}><button class=' hover:scale-105 duration-500 cursor-pointer p-1 border-1 border-b-1
        border-yellow-600 text-yellow-600 text-2xl border-x-1 w-45 relative bottom-40 left-144 font-serif 
         hover:bg-gray-300 ...' >Shop now  </button></Link> 
       </div>
        </Slider>
        </div>
    );
}
        
export default Header;



// <p className='flex  absolute text-zinc-100  top-70 left-25 font-semibold text-4xl '>You deserve the most</p>
// <hr className='border-2 text-yellow-600 flex relative w-20 left-115 top-60'></hr>
// <p className='flex absolute text-zinc-100  top-85 left-25 font-semibold text-7xl '>unique jewellery</p>
// <p className='flex absolute text-zinc-400 font-serif text-2xl  bottom-38 left-25'> As human beings, we're 
//    very materialistic and have all<br></br> this stuff - furs and cars and diamonds and money.</p>