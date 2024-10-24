import logo from '../assets/images/pexels-leif-bergerson-99376750-9843280.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import CartList from './CartList';
import { useState } from 'react';
import Products from './Products';

const Navbar = () => {
  const [isCartVisible, setCartVisible] = useState(false);

  // Toggle cart visibility and manage product view based on that
  const handleConditionalRendering = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <>
      <nav className="bg-white-400 py-4 shadow-md ">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#home">
            <img
              src={logo}
              alt="Ferreri"
              className="max-w-[40px] object-contain rounded-[50%]"
            />
          </a>
          <div className="flex gap-4 relative">
            <a href="#home" className="navHome" id="lws-home">
              Home
            </a>
            <a href="#cart" className="navCart" id="lws-cart" onClick={handleConditionalRendering}>
              {/* Cart icon with FontAwesome */}
              <FontAwesomeIcon icon={faBagShopping} className="text-xl text-blue-500 cursor-pointer" />
              <span
                id="lws-totalCart"
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center"
              >
                0
              </span>
            </a>
          </div>
        </div>
      </nav>
      {/* Conditional rendering of components */}
      {isCartVisible ? <CartList /> : <Products />}
    </>
  );
};

export default Navbar;
