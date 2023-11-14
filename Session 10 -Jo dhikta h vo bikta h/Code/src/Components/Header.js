import { useState } from "react";
import Logo from "../assets/img/Logo.png";
import Green from "../assets/img/Green_icon.png"
import red from "../assets/img/red_icon.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import basic from "./Login.js";


export const Title = () => (
  <a href="/">
    <img className="w-16 ml-2 mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const onlineStatus=useOnlineStatus();
  return (
    <>
    <header>
      <div className="flex justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-4 shadow-md">
        <Title />
        <div className="my- mr-2 ml-2 mt-2 flex items-center justify-between py-3 rounded-lg">
          <ul className="flex gap-4 lg:justify-between lg:items-center lg:gap-12 lg:mr-20 ml-2 flex space-x-5">
          <li className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 ">
              {onlineStatus===true ? <img className="w-6 h-6" src={Green} />: <img className="w-6 " src={red}/>}
            </li>
            <li className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4  ">
              {" "}
              <Link to="/"> Home</Link>
            </li>
            <li className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4  ">
              {" "}
              <Link to="/about"> About</Link>
            </li>
            <li className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 ">
              {" "}
              <Link to="/contact">Contact US</Link>
            </li>
            <li className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4  "> Cart</li>
          </ul>
          <div className="mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4 " >
          <Link to="/login">
            <button className=" h-5">Login</button>
          </Link>
        </div>
        </div>

        
        {/*} {isLoggedIn ? 
           (<button onClick ={()=> setisLoggedIn(false) } className="bg-gray-200 h-5">Logout</button> )
           : ( <button onClick ={()=> setisLoggedIn(true) } className="bg-gray-200">Login </button>)
          } */}
      </div>
      </header>
    </>
  );
};

export default Header;



