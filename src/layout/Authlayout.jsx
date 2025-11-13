import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Authlayout = () => {
    return (
        <div>
            <header className=''>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto my-10'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Authlayout;