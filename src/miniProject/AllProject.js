import React from 'react';
import OthersNavbar from '../page/OthersNavbar';
import Assignment1 from './assignment1/Assignment1';
import Assignment2 from './assignment2/Assignment2';
import Assignment3 from './assignment3/Assignment3';

const AllProject = () => {
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <Assignment1></Assignment1>
            <Assignment2></Assignment2>
            <Assignment3></Assignment3>
        </div>
    );
};

export default AllProject;