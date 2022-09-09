import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
export default function Slider_Child(props) {
  return (
    <div>
      <Swiper
        navigation={true}
        speed={1000}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay, Navigation]}
        className="mySwiper text-gray-500 "
      >
        <SwiperSlide className="flex flex-col">
          <img src={props.data.mydata[0]} className="rounded-full mt-20" alt=""/>
          <p className="px-10 py-4">{props.data.para}</p>
          <h1 className="text-black py-2">{props.data.Name[0]}</h1>
          <h1 className="text-blue-700 text-sm pb-2">{props.data.Pro[0]}</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={props.data.mydata[1]} className="rounded-full mt-20" alt=""/>
          <p className="px-10 py-4">{props.data.para}</p>
          <h1 className="text-black py-2">{props.data.Name[1]}</h1>
          <h1 className="text-blue-700 text-sm pb-2">{props.data.Pro[1]}</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={props.data.mydata[2]} className="rounded-full mt-20" alt=""/>
          <p className="px-10 py-4">{props.data.para}</p>
          <h1 className="text-black py-2">{props.data.Name[2]}</h1>
          <h1 className="text-blue-700 text-sm pb-2">{props.data.Pro[2]}</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={props.data.mydata[3]} className="rounded-full mt-20" alt=""/>
          <p className="px-10 py-4">{props.data.para}</p>
          <h1 className="text-black py-2">{props.data.Name[3]}</h1>
          <h1 className="text-blue-700 text-sm pb-2">{props.data.Pro[3]}</h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={props.data.mydata[4]} className="rounded-full mt-20"  alt="" />
          <p className="px-10 py-4">{props.data.para}</p>
          <h1 className="text-black py-2">{props.data.Name[4]}</h1>
          <h1 className="text-blue-700 text-sm pb-2">{props.data.Pro[4]}</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
