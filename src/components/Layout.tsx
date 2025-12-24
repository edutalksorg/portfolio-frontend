import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { PageTransition } from './animations/PageTransition';
import { ScrollProgress, BackToTop } from './animations/ScrollProgress';



const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">

            <ScrollProgress color="var(--primary)" height={3} />
            <Navbar />
            <main className="flex-grow">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;
