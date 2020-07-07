import React from 'react';
import Navbar from '../components/Navbar'

const MainLayout = props => (
    <>
        <Navbar/>
        {props.children}
    </>
);

export default MainLayout;
