import React from 'react';
import { useState } from 'react';

const Signup = () => {
    // const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    /* const handleSubmit = (e) => {
        e.preventDefault();

        const fullName = e.target.fname.value + " " + e.target.lname.value;

        setName(fullName);
        setEmail(e.target.email.value);
        setPhone(e.target.phone.value);
        e.target.reset();
    } */

    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center' }}>
            <h1>SignUp Page</h1>
            <form action="">
                <input type="text" onChange={(e) =>setFname(e.target.value)} placeholder='Enter First Name' name='fname' required /> <br />
                <input type="text" onChange={(e) =>setLname(e.target.value)} placeholder='Enter Last Name' name='lname' required /> <br />
                <input type="email" onChange={(e) =>setEmail(e.target.value)} placeholder='Enter Your Email' name='email' required /> <br />
                <input type="number" onChange={(e) =>setPhone(e.target.value)} placeholder='Enter Phone Number' name='phone' required /> <br />
                <input type="submit" value="SignUp Now" />
            </form>
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
        </div>
    );
};

export default Signup;