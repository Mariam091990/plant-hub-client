import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        
            <div className='container mx-auto'>
                <header className='relative z-50'>
                    <Navbar></Navbar>
                </header>

                <Banner></Banner>
                <main>
                    <Outlet></Outlet>
                </main>

                <footer>
                    <Footer></Footer>
                </footer>
            </div>
    )    
};

export default MainLayout;

