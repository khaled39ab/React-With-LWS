import React from 'react';
import OthersNavbar from '../OthersNavbar';
import reactLogo from './../../images/react-logo.png';
import './Card.css'

const Card = () => {
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <div>
                <h1 className='heading'>React Card</h1>
                <div className='card-container'>
                    <div className='img-section'>
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className='card-desc'>
                        <h2 className='card-title'>React Card</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum mollitia illum nemo?</p>
                        <button className='card-btn'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;