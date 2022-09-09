import React from 'react'
import Pricing2child from './Pricing2child'
import Pic from "../Assets/the724.jpg"
import Pic2 from "../Assets/the725.jpg"
export default function pricing2() {
  return (
    <>
   <div className="grid lg:grid-cols-2 grid-cols-1">
   <div className=" flex bg-gray-200 py-8 justify-center">
        <Pricing2child data={{src:Pic,title:"Jason Seven",title2:"Founder",
        title3:"“Vestibulum posuere felis vestibulum pharetra dapibus. Nam vitae sapien, porttitor purus. Cras et diam ac – nunc urna magna, porttitor eu laoreet aliquam, pellentesque eu velit. Suspendisse potenti!”"}}/>
   </div>
   
   <div className="">
   <img className='h-full' src={Pic2} alt="" />
   </div>

   </div>

    </>
  )
}
