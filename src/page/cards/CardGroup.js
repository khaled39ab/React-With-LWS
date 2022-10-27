import React from 'react';
import Card from './Card';
import OthersNavbar from '../OthersNavbar';
import './CardGroup.css';
import Data from './../../Data.json';

const CardGroup = () => {
    /* 
        const frameworks = Data.map((dt, index) => <Card
            key={index}
            fmName={dt.name}
            fmDesc={dt.desc}
            fmImg={dt.img}
        />)
    */

    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <div>
                <h1 className='heading'>Programming Language Framework</h1>
                <div className='cardGroup'>
                    {
                        Data.map((dt, index) => <Card
                            key={index}
                            fmName={dt.name}
                            fmDesc={dt.desc}
                            fmImg={dt.img}
                        />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CardGroup;