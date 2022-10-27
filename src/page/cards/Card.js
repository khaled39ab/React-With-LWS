import React from 'react';
import './Card.css'

const Card = (props) => {
    const { fmName, fmDesc, fmImg } = props;
    console.log(fmImg);
    return (
        <div>
            <div className='card-container'>
                <div className='img-section'>
                    <img src={fmImg} alt="" />
                </div>
                <div className='card-desc'>
                    <h2 className='card-title'>{fmName}</h2>
                    <p>{fmDesc}</p>
                    <a href="https://www.monocubed.com/blog/most-popular-web-frameworks/" target="blank"><button className='card-btn'>Go to Web</button></a>
                </div>
            </div>
        </div>
    );
};

export default Card;