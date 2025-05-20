'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />

        <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
          home24h
        </h2>

        <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" onClick={() => {
          setIsOpen(!isOpen);
        }} />

      {/* //when the menu is clicked, dropdown menu will be shown */}
      <div className={`absolute top-[60px] right-0 bg-white shadow-lg rounded-lg p-4 ${isOpen ? 'block' : 'hidden'}`}>
        <ul>
          <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Home</li>
          <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">About</li>
          <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Services</li>
          <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Contact</li>
        </ul>
        </div>
    </div>
  </motion.nav>
)};

export default Navbar;
