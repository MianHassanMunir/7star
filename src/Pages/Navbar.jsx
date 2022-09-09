import {useState} from "react";
import Logo from "../Assets/the702.svg";
import { BsChatText, BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-scroll";

export default function Navbar() {
    
    const [nav, setNav] = useState(true);
    const handlNav = () => {
      setNav(!nav);
    };
  return (
    <>
      <div className=" head sticky top-0 nav py-4 z-10 ">
        <div className="items-center justify-around flex ">
          <div>
            <img src={Logo} className="w-12 ml-2" alt=""/>
          </div>
          <div className="md:block hidden">
            <ul className="flex">
              <li>
                <Link to="home" smoth={true} offset={50} duratio={100}>
                Home
                </Link>
              </li>
              <li>
                <Link to="about" smoth={true} offset={-50} duration={100}>
                About
                </Link>
              </li>
              <li>
                <Link to="service" smooth={true} offset={-50} duration={100}>
                Services
                </Link>
                </li>
              <li>
                <Link to="portfolio" smooth={true} offset={-50} duration={100} >
                Portfolio
                </Link>
               </li>
              <li>
                <Link to="Pricing" smooth={true} offset={-50} duration={100}>
                Pricing
                </Link>
              </li>
              <li>
                <Link to="work" smooth={true} offset={-50} duration={100}>
                How we work
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className="px-3">
              <BsChatText size={20} className="icon " />
            </div>
            <a href="/#" className="hover:text-[#03d87d] hover:underline duration-300">
              Contact
            </a>
          </div>
          <button onClick={handlNav} className="md:hidden block">
            {!nav ? (
              <AiOutlineClose size={30} className="icon" />
            ) : (
              <BsList size={30} className="icon" />
            )}
          </button>
        </div>
        {!nav ? (
          <div className="bg-black w-full h-[100%] top-0 left-0 fixed ease-in-out duration-300 flex flex-col items-center justify-center py-5">
            <button
              onClick={handlNav}
              className="md:ml-[80%] sm:ml-[70%] ml-[50%] "
            >
              {!nav ? (
                <AiOutlineClose
                  size={30}
                  className="icon hover:rotate-180 hover:bg-white rounded-full duration-500"
                />
              ) : (
                <BsList size={30} className="icon" />
              )}
            </button>
            <div className="py-5">
              <img src={Logo} className="w-12" alt=""/>
            </div>
            <div className="flex flex-col items-center py-2">
              <ul className="flex flex-col items-center">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Pricing</li>
                <li>How we work</li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
