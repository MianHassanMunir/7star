import React from 'react'

export default function SevicesCard(props) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='bg-[#04D87E] justify-center h-12 w-12 flex items-center rounded-full text-white p-2'>{props.data.icon}</div>
        <h1 className={`${props.data.text} font-semibold py-2`}>{props.data.hilight}</h1>
        <p className='text-center'>{props.data.para}</p>
    </div>
  )
}