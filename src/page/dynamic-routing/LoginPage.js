import React from 'react';
import { useState } from 'react';

const LoginPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div style={{marginBottom: '30px'}}>
            {isLoggedIn ?
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                >Log Out</button> :
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                >Log In</button>}
        </div>
    );
};

export default LoginPage;