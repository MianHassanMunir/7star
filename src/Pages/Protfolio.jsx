import { useState } from "react";
import { Tab } from "@headlessui/react";
import Port1 from "../Assets/the711.jpg";
import Port2 from "../Assets/the712.jpg";
import Port3 from "../Assets/the713.jpg";
import Port4 from "../Assets/the714.jpg";
import Port5 from "../Assets/the715.jpg";
import Port6 from "../Assets/the716.jpg";
import Port7 from "../Assets/the718.jpg";
import Port8 from "../Assets/the719.jpg";
import Port9 from "../Assets/the720.jpg";
import Port10 from "../Assets/the721.jpg";
import Port11 from "../Assets/the722.jpg";
import Port12 from "../Assets/the723.jpg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio() {
  let [categories] = useState({
    All: [
      {
        pic: Port1,
        para: "Modern arts museum",
        foot: "Web Design",
      },
      {
        pic: Port2,
        para: "Minimalistic workspace",
        foot: "Web Design",
      },
      {
        pic: Port3,
        para: "Red space",
        foot: "Web Design",
      },
      {
        pic: Port4,
        para: "Illumination",
        foot: "Item Design",
      },
      {
        pic: Port5,
        para: "Neon waves",
        foot: "Web Design",
      },
      {
        pic: Port6,
        para: "The future is now",
        foot: "Logo Design",
      },
    ],
    itemDesign: [
      {
        pic: Port4,
        para: "Illumination",
        foot: "Item Design",
      },
      {
        pic: Port7,
        para: "Reflections project",
        foot: "Item Design",
      },
      {
        pic: Port8,
        para: "Quadro",
        foot: "Item Design",
      },
      {
        pic: Port9,
        para: "Virtual reality kit",
        foot: "Item Design",
      },
    ],
    LogoDesign: [
      {
        pic: Port10,
        para: "The future is now",
        foot: "Logo Design",
      },
      {
        pic: Port11,
        para: "VR vibe",
        foot: "Logo Design",
      },
      {
        pic: Port12,
        para: "VR vibe",
        foot: "Logo Design",
      },
      {
        pic: Port4,
        para: "Quadro",
        foot: "Item design, Logo design",
      },
    ],
    WebDesign: [
      {
        pic: Port1,
        para: "Modern arts museum",
        foot: "Web Design",
      },
      {
        pic: Port2,
        para: "Minimalistic workspace",
        foot: "Web Design",
      },
      {
        pic: Port3,
        para: "Red space",
        foot: "Logo/Web Design",
      },
      {
        pic: Port4,
        para: "Neon waves",
        foot: "Logo/Web Design",
      },
      {
        pic: Port5,
        para: "VR vibe",
        foot: "Logo/Web Design",
      },
      {
        pic: Port6,
        para: "Sound check",
        foot: "Logo/Web Design",
      },
    ],
  });

  return (
<div id="portfolio">
<div id="portfolio" className="bg-white container_flud rounded-xl py-5">
      <h1 className="text-blue-700 text-center text-3xl py-5">PROJECTS</h1>
      <p className="text-4xl text-center pb-20">
        Our portfolio speaks better than words!
      </p>
      <Tab.Group>
        <Tab.List className="flex flex-wrap  justify-center p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "font-medium leading-5 mx-3 px-2",
                  "ring-white ring-opacity-60 ring-offset-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-[#EC3C63]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-5 my-5">
                {posts.map((post, i) => (
                  <div className="rounded-xl" key={i}>
                    <div className="overflow-hidden rounded-xl mx-10 my-5">
                      <img
                        src={post.pic} alt=""
                        className="rounded-xl hover:scale-110 duration-300 w-full"
                      />
                    </div>
                    <p className="text-gray-400 text-sm mx-10">{post.foot}</p>
                    <p className="text-xl mx-10 pb-3">{post.para}</p>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <div className="flex items-center justify-center">
          <button className="bg-blue-200 text-blue-700 duration-300 hover:text-white px-5 py-4 hover:bg-blue-500 rounded">
            Load More Prokjects
          </button>
        </div>
      </Tab.Group>
    </div>
    </div>
  )
                }              