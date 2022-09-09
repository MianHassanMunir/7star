import React from "react";
import Heading from "../Compentes/Heading";
import SevicesCard from "../Compentes/ServicesCard";
import { GrPieChart } from "react-icons/gr";
import {FiHash} from "react-icons/fi"
import {BsPersonCheck} from "react-icons/bs"
import {RiClapperboardLine} from "react-icons/ri"
import {FaPencilRuler} from "react-icons/fa"
import {AiOutlineFileProtect} from "react-icons/ai"
import Slider from "../Compentes/Slider";
export default function Services() {
  return (
    <div id="service">
      <div>
        <Heading
          head={{
            h1: "SERVICES",
            color: "text-[#04D87E]",
            h2: "We provide a full range of modern digital services",
          }}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 container_fluid">
        <SevicesCard
          data={{
            icon: <GrPieChart size={30} />,
            hilight: "Digital marketing",
            text: "text-2xl",

            para: "Lorem ipsum - glavrida amet nulla from glavrida ipsum amet dolor dolor sit amet, consectetur adipiscing elit.",
          }}
        />
        <SevicesCard
          data={{
            icon: <FiHash size={30} />,
            hilight: "Social accounts management",
            text: "text-xl",
            para: "Lorem ipsum - glavrida amet nulla from glavrida ipsum amet dolor dolor sit amet, consectetur adipiscing elit.",
          }}
        />
        <SevicesCard
          data={{
            icon: <BsPersonCheck size={30} />,
            hilight: "Consulting services",
            text: "text-2xl",

            para: "Lorem ipsum - glavrida amet nulla from glavrida ipsum amet dolor dolor sit amet, consectetur adipiscing elit.",
          }}
        />
        <SevicesCard
          data={{
            icon: <RiClapperboardLine size={30} />,
            hilight: "Web design & mobile apps",
            text: "text-2xl",

            para: "Lorem ipsum - glavrida amet nulla from glavrida ipsum amet dolor dolor sit amet, consectetur adipiscing elit.",
          }}
        />
        <SevicesCard
          data={{
            icon: <FaPencilRuler size={30} />,
            hilight: "Copywriting",
            text: "text-2xl",

            para: "Lorem ipsum - glavrida amet nulla from glavrida ipsum amet dolor dolor sit amet, consectetur adipiscing elit.",
          }}
        />
        <SevicesCard
          data={{
            icon: <AiOutlineFileProtect size={30} />,
            hilight: "Digital data protection",
            text: "text-2xl",

            para: "Lorem ipsum - glavrida amet nulla from glavrida ipsum amet dolor dolor sit amet, consectetur adipiscing elit.",
          }}
        />
      </div>
      <div className="mt-5 bg-[#EBF4FD]">
        <Slider />
      </div>
    </div>
  );
}