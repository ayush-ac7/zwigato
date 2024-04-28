import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCart } from "react-icons/pi";

const Header = () => {
  //console.log("Header component is rendered");

  const [btnNameReact, setBtnNameReact] = useState("Login");

  //Selector from redux
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="w-full flex justify-between shadow-lg bg-orange-400">
      <div className="logo-container">
        <img className="logo w-20 rounded-full mt-1 ml-3" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul className="flex p-4 m-4">
          <li className="mr-10">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mr-9">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="mr-9">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="mr-10 flex items-center justify-center">
            <PiShoppingCart />
            <Link className="ml-1" to={"/cart"}>
              Cart({cartItems.length})
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
