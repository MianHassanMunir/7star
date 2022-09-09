import React from 'react'
export default function Footerchild(props) {
  return (
    <>
    <div className="flex justify-center items-center bg-gray-500 hover:bg-green-400 text-white w-10 h-10 rounded-full">
         {props.data.ion}
         </div>
    </>
  )
}

