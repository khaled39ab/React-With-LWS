import React from 'react';
import OthersNavbar from '../OthersNavbar';
import Context1 from './useContext/Context1';
import UseReducer from './useReducer/UseReducer';

const Hook = () => {
    return (
        <>
            <OthersNavbar />
            <div style={{margin: '15px', border: '2px solid blue', padding: '20px'}}>
                <h1 style={{color: 'red'}}>useReducer:</h1>
                <UseReducer/>
            </div>

            <div style={{margin: '15px', border: '2px solid blue', padding: '20px'}}>
                <h1 style={{color: 'red'}}>useContext:</h1>
                <Context1></Context1>
            </div>

        </>
    );
};

export default Hook;