import React from 'react';
import { useState } from 'react';
import OthersNavbar from '../page/OthersNavbar';
import ConditionalRendering from './ConditionalRendering';

const RenderingHome = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <ConditionalRendering></ConditionalRendering>
            <div style={{ margin: '2rem', backgroundColor: 'rosybrown', color: 'white', padding: '1rem' }}>
                {
                    toggle &&
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas accusamus vero quisquam, nisi placeat explicabo! Velit sequi atque reprehenderit dolorem accusantium incidunt iure eaque sit, nostrum officia nobis inventore!</p>
                }

                <div style={{ textAlign: 'center' }}>
                    {/* 
                    <button onClick={() => setToggle(true)} style={{ color: 'white', backgroundColor: 'green', padding: '0.5rem' }}>Show</button>
                    <button style={{ color: 'white', backgroundColor: 'red', padding: '0.5rem' }} onClick={() => setToggle(false)}>Hide</button>
                     */}
                    <button onClick={() => setToggle(!toggle)}>
                        {toggle ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RenderingHome;