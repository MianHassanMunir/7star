import React from 'react'
import Work from './work'
import WorkCard from '../Compentes/workmaincard'

export default function WorkMain() {
  return (
    <div>
        <div className=' flex-col text-center pt-12 font-medium '>
            <p className='text-blue-500 text-2xl'>HOW WE WORK</p>
            <h1 className='pt-6 text-4xl'>Working with us is simple!</h1>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 pl-16 pt-10 gap-6' >
        <WorkCard h1={"1."} h2={"Discussion"} title={"Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ut elit tellus, luctus nec  ullamcorper mattis, pulvinar dapibus leo."}/>
        <WorkCard h1={"2."} h2={"Concept"} title={"Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}/>
        <WorkCard h1={"3."} h2={"Final strategy"} title={"Pulvinar dapibus leo adipiscing elit mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis!"}/>
        <WorkCard h1={"4."} h2={"Implementation"} title={"Pulvinar dapibus leo adipiscing elit mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis!"}/>
        <WorkCard h1={"5."} h2={"Testing & evaluation"} title={"Leo adipiscing elit mattis, pulvinart elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus."}/>
        <WorkCard h1={"6."} h2={"Support & updates"} title={"Mattis pulvinart - elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."}/>
        </div>
        <Work/>
    </div>
  )
}
