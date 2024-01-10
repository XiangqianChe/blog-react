import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function PageLayout(props) {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default PageLayout;