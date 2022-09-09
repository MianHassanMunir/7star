import React from 'react'
import Pic5 from "../Assets/the702.svg"
// import Footerchild from '../Compentes/Footerchild'
import {FaTiktok} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa"
import Footerchild from '../Compentes/Footerchild'
export default function Footer() {
  return (
    <>
    <div className="bg-black py-5">
       
        <div className="flex flex-col items-center mt-8 py-3">
          <img className='w-12' src={Pic5} alt="" />
          <h1 className='text-white font-semibold mt-5 text-3xl'>Seven Agency</h1>
          <div className="mt-8 w-60 flex justify-evenly">
         <Footerchild data={{ion:<FaTiktok className='text-lg' />}}/>
         <Footerchild data={{ion:<BsFacebook className='text-lg' />}}/>
         <Footerchild data={{ion:<BsYoutube className='text-lg' />}}/>
         <Footerchild data={{ion:<FaTelegramPlane className='text-lg' />}}/>
        </div>  

        <div className="mt-5">
          <ul className='lg:flex text-white hover:border-green-500 '>
            <li className='text-sm '>Privacy policy</li>
            <li className='text-sm'>Terms of service</li>
            <li className='text-sm'>Demo design system</li>
            <li className='text-sm'>Contact us</li>
            <li className='text-sm'>News</li>
            <li className='text-sm'>Search</li>
          </ul>
        </div>
        <p className='text-sm text-gray-600 mt-3'>© Copyright 2022. Dream-Theme. All rights reserved.</p>
        </div>
        
          
       
    </div>
    </>
  )
}
