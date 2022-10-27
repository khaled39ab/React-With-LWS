import React from 'react';
import ReactLogo from './../../images/react-logo.png';
import AngularLogo from './../../images/angular-logo.png';
import VueLogo from './../../images/vue-logo.png';
import LaravelLogo from './../../images/laravel-logo.png';
import DjangoLogo from './../../images/django-logo.png';
import './Card.css'

const Card = (props) => {
    const { fmName, fmDesc, fmImg } = props;
    console.log( fmImg);
    return (
        <div>
            <div className='card-container'>
                <div className='img-section'>
                    <img src={fmImg} alt="" />
                </div>
                <div className='card-desc'>
                    <h2 className='card-title'>{fmName}</h2>
                    <p>{fmDesc}</p>
                    <button className='card-btn'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Card;