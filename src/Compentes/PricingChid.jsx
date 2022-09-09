import React from 'react'

export default function Pricingchild(props) {
  return (
    <>
    
    <div className=" text-center mx-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-400">{props.data.title1}</h5>
        <h5 className="mb-4 text-xl font-medium text-green-300 dark:text-gray-400">{props.data.title2}</h5>
        <div className=" items-baseline  text-gray-900 dark:text-white">
            <sup className="text-2xl font-semibold">$</sup>
            <span className="text-6xl font-semibold tracking-tight">{props.data.head1}</span>
            <sup className="ml-1 text-xl font-normal text-gray-800 dark:text-gray-400">{props.data.head2}</sup>
        </div>
        <ul className="my-7 space-y-4 ">
            <li className="text-center ">
                <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">{props.data.title3}</span>
            </li>
            <li className="text-center">
                <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">{props.data.title4}</span>
            </li>

            <li className="text-center">
                <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">{props.data.title5}</span>
            </li>
            
            <li className="text-center decoration-gray-500">
                <span className="text-base font-normal leading-tight text-gray-800">{props.data.title6}</span>
            </li>

            
            
            
        </ul>
       <p className='text-gray-400 py-2 text-sm'>{props.data.title7}</p>
    </div>

    </>
  )
}
