import React from 'react'
import Pic3 from "../Assets/the726.jpg"
import Work4 from '../Compentes/work2_child'
import {IoLocationOutline} from "react-icons/io5"
import {TiMessage} from "react-icons/ti"
import {BiPhoneCall} from "react-icons/bi"
export default function Work() {
  return (
    < div id='work'>
    <div className=" grid lg:grid-cols-2   grid-cols-1">
        <div className="">
            <img className='h-full' src={Pic3} alt="" />
        </div>
        
        <div className=" grid-rows-3 py-8 space-y-2 bg-[#EBF4FD] ">
        <Work4 data={{ion:<IoLocationOutline  className='text-blue-500 text-3xl'/>,head:"SoHo 94 Broadway St New York, NY 1001",title:"Please call before visit"}}/>
        <Work4 data={{ion:<TiMessage  className='text-blue-500 text-3xl'/>,head:"hello@dream-theme.com",title:"For clients & partners"}}/>
        <Work4 data={{ion:<BiPhoneCall  className='text-blue-500 text-3xl'/>,head:"tel. 001 234 56 78",title:"Please call before visit"}}/>
        </div>
    </div>
    </div>
  )
}

