import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Homelayout = () => {
    return (
        <div>
            <header className=''>
                <Navbar></Navbar>
            </header>
            <main className='mt-3'>
                <Outlet></Outlet>
            </main>
           <footer className='mt-3'>
             <Footer></Footer>
           </footer>
        </div>
    );
};

export default Homelayout;