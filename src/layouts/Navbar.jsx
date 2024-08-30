import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Menu from '../assets/menu.svg';
import Close from '../assets/close.svg';

function Navbar() {
  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className='lg:px-24 px-8 flex justify-between items-center py-6'>
      <div className="font-outfit">
        <Link to='/' className="text-2xl">
          <span className="text-secondary font-bold">Musica</span>
        </Link>
      </div>

      {/* Mobile icon  */}
      <button className="lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <img src={Menu} alt="menu" />
        ) : (
          <img src={Close} alt="close" />
        )}
      </button>

      {/* Large screen  */}
      <div className="lg:flex md:items-center md:space-x-12 hidden">
        <Link to='/'>Explore</Link>
        <Link to='/'>Overview</Link>
        <Link to='/'>FAQs</Link>
        <div>
          <button 
            className='hover:bg-gray-200 py-2 px-8 md:ml-36 border-2 hover:border-main/70 hover:text-main rounded-lg uppercase font-bold tracking-wider'
          >
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-main backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center py-24 gap-6">
          <Link onClick={closeMenu} to='/timeline'>Timeline</Link>
          <Link onClick={closeMenu} to='/overview'>Overview</Link>
          <Link onClick={closeMenu} to='/faqs'>FAQs</Link>
          <div>
            <button 
              className='hover:bg-gray-400 py-2 px-8 md:ml-36 border-2 hover:border-main hover:text-main rounded-lg uppercase font-bold tracking-wider'
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
