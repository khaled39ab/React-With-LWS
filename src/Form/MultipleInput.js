import React from 'react';
import { useState } from 'react';

const MultipleInput = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const handleSubmit = (e) => {
        /* const nameInput = e.target.name.value;
        const emailInput = e.target.email.value;
        const addressInput = e.target.address.value;
        // const info ='Name: ' + name + '\n' + 'email: ' + email + '\n' + 'Address: ' + address;
        // alert('Check your info ' + '\n' + info )

        setName(nameInput);
        setEmail(emailInput);
        setAddress(addressInput); */

        e.preventDefault();
        setName(e.target.name.value);
        setEmail(e.target.email.value);
        setAddress(e.target.address.value);
        e.target.reset();
    }
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center' }}>
            <h1>Handle multiple input</h1>
            <form action="" onSubmit={handleSubmit}>
                <h4>Input your data</h4>
                <p>
                    <strong>Name: {name}</strong> <br />
                    <strong>Email: {email}</strong> <br />
                    <strong>Address: {address}</strong>
                </p>
                <input name='name' type="text" placeholder='Enter Your Name' required/> <br />
                <input name='email' type="email" placeholder='Enter Your Email' required/> <br />
                <textarea name="address" id="" cols="21" rows="2" placeholder='Enter Your Address' required></textarea> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MultipleInput;