import React from 'react';
import './style4.css'

const Assignment4 = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '20px', 'margin': '10px' }}>
            <div>
                <h1>React Assignment - 4 : User Management App</h1> <br />

                <h4>Testing students skills on</h4>

                <ul>
                    <li>useEffect() hook</li>
                    <li>error handling when loading data</li>
                    <li>using custom hook</li>
                </ul>

                <br />

                <h4> <strong>Assignment steps:</strong></h4>

                <ol>
                    <li> step1 : declare three states : users, isLoading, error </li>
                    <li>step2 : use useEffect for fetching the data including updating isLoading and error states </li>
                    <li>step3 : pass the users data to Users component</li>

                    <li>finally check the project demo and try to match your one as much as possible. <a href="https://users-mgt-app.netlify.app/" target="blank">Link</a></li>
                </ol>
            </div>
            <hr />
            <hr />

            <div className='assignment4'>
                <div className="container4">
                    <h1 className="title4">Users Management App</h1>
                    {/* {isLoading && <p>Loading users...</p>} */}
                    {/* {error && <p>{error}</p>} */}
                    {/* step3 : pass the users data to Users component  */}
                </div>
            </div>
        </div>
    );
};

export default Assignment4;