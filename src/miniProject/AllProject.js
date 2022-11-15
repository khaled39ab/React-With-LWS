import React from 'react';
import OthersNavbar from '../page/OthersNavbar';
import Assignment1 from './assignment1/Assignment1';
import Assignment2 from './assignment2/Assignment2';
import TodoHome from './todoApp/TodoHome';

const AllProject = () => {
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <Assignment1></Assignment1>
            <Assignment2></Assignment2>
            <TodoHome></TodoHome>
        </div>
    );
};

export default AllProject;