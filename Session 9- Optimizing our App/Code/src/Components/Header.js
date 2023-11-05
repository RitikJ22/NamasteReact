import { useState } from "react";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import basic from "./Login.js";

export const Title = () => (
  <a href="/">
    <img className="w-16 ml-2" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const onlineStatus=useOnlineStatus();
  return (
    <>
    <header>
      <div className="flex justify-between m-6 border-4 border-black lg:items-center rounded-lg ">
        <Title />
        <div className="">
          <ul className="flex gap-4 lg:justify-between lg:items-center lg:gap-12 lg:mr-20">
          <li>
              Onlinestatus:{onlineStatus===true ? "Y" : "N"}
            </li>
            <li>
              {" "}
              <Link to="/"> Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about"> About</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact US</Link>
            </li>
            <li> Cart</li>
          </ul>
        </div>

        <div>
          <Link to="/login">
            <button className=" h-5">Login</button>
          </Link>
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
