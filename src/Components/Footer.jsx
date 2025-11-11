import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
       <footer className="footer footer-horizontal footer-center bg-black text-white rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Privacy Policy</a>
  </nav>
  <nav>
    <div className="flex justify-center gap-6">
        <a 
  href="https://www.instagram.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className=' transition transform hover:scale-110'
>
  <FaInstagram size={30} />
</a>
         <a 
  href="https://www.facebook.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className=' transition transform hover:scale-110'
>
  <FaFacebook size={30}></FaFacebook>
</a>
        <a 
  href="https://www.pinterest.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className=' transition transform hover:scale-110'
>
  <FaPinterest size={30} />
</a>
    </div>
  </nav>
  <aside>
    <p>© {new Date().getFullYear()} GreenNest. All right reserved </p>
  </aside>
</footer>
    );
};

export default Footer;