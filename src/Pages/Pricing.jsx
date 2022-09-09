import React from 'react'
import Pricingchild from '../Compentes/PricingChid'
import Pricing2 from '../Compentes/pricing2'
export default function Pricing() {
  return (
    <>
    <div id='Pricing'>
    <div className=" flex flex-col items-center">
    <h1 className='text-green-500 mt-20 py-5 text-lg font-semibold'>PRICING PLANS</h1>
    <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold lg:tracking-wider'>Perfect solution for any business!</h1>
    </div>

    <div className="w-[90%] gap-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
        
        <Pricingchild data={{title1:"Light",title2:"For small companies",head1:"39", head2:"99",title3:"+ 24/7 Customer Support",title4:"- Club membership",title5:"- Personal Assistance",title6:"- Free Updates",title7:"Ut interduminterdum. Integer suscipit ex eget viverra pellentesque."}} />
        <Pricingchild data={{title1:"Regular",title2:"For medium companies",head1:"46", head2:"",title3:"+ 24/7 Customer Support",title4:"- Club membership",title5:"- Personal Assistance",title6:"- Free Updates",title7:"Ut interdum sapien dignissim interdum. Integer suscipit ex eget viverra pellentesque."}} />
        <Pricingchild data={{title1:"Extended",title2:"For large companies",head1:"125", head2:"99",title3:"+ 24/7 Customer Support",title4:"- Club membership",title5:"- Personal Assistance",title6:"- Free Updates",title7:"Lorem sapien dignissim interdum. Integer suscipit ex eget viverra pellentesque nulla."}} />
        
    </div>
    <Pricing2 />
    </div>
    </>
  )
}
