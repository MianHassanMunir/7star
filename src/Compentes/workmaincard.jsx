import React from 'react'

export default function WorkCard(props) {
  return (
    <div>
        <div className='w-[92%] pb-10  '>
            <h1 className='text-blue-500 text-5xl pt-4'>{props.h1}</h1>
            <h2 className='text-3xl font-medium pt-4'> {props.h2}</h2>
            <p className='text-gray-500 pt-4'>{props.title}</p>
        </div>
    </div>
  )
}
