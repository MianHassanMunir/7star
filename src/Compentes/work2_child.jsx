

import React from 'react'
export default function Work4 (props) {
  return (
    <>
    <div className="  flex flex-col items-center py-2">
        {props.data.ion}
        <h1 className='font-medium text-xl py-2'>{props.data.head}</h1>
        <p className='text-gray-500'>{props.data.title}</p>
    </div>
    </>
  )
}