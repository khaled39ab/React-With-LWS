import React from 'react';
import DynamicNavbar from './DynamicNavbar';
import './DynamicNavbar.css'
import LoginPage from './LoginPage';

const DynamicRoute = () => {

    return (
        <div>
            <DynamicNavbar></DynamicNavbar>
            {/* <LoginPage></LoginPage> */}
            <h1>Dynamic Home Page</h1>
        </div>
    );
};

export default DynamicRoute;