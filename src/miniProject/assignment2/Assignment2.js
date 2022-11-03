import React from 'react';
import './style2.css'

const Assignment2 = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '20px', 'margin': '10px' }}>
            <div>
                <h1>React Assignment - 2 : Counter App</h1> <br />

                <h4>Testing students skills on</h4>

                <ul>
                    <li>useState() hook</li>
                    <li>Event Handler</li>
                    <li>conditional rendering</li>
                </ul>

                <br />

                <h4> <strong>Assignment steps:</strong></h4>

                <ol>
                    <li> make sure that increment, decrement and reset functionality works </li>
                    <li>
                        disable buttons
                        <ul>
                            <li>disable increment button when count value is 5</li>
                            <li>disable decrement button when count value is -5</li>
                        </ul>
                    </li>
                    <li>finally check the project demo and try to match your one as much as possible. <a href="https://react-assignment-2-counter-app.netlify.app/" target="blank">Link</a></li>
                </ol>
            </div>
            <hr />
            <hr />

            <div className='assignment2' style={{ 'margin': '10px' }}>
                <div className="counter center">
                    <h1 className="counter__title">Counter App</h1>
                    <div className="card center">
                        <h2 className="card__title">Count : 0</h2>
                        <div className="card__btn">
                            <button className="btn2 card__btn">+</button>
                            <button className="btn2 card__btn">-</button>
                            <button className="btn2 card__btn">0</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignment2;