import React from 'react';

const MultipleInput = () => {

    const handleSubmit = (e) => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        const info ='Name: ' + name + '\n' + 'email: ' + email + '\n' + 'Address: ' + address;
        alert('Check your info ' + '\n' + info )
    }
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center' }}>
            <h1>Handle multiple input</h1>
            <form action="" onSubmit={handleSubmit}>
                <h4>Input your data</h4>
                <input name='name' type="text" placeholder='Enter Your Name' /> <br />
                <input name='email' type="email" placeholder='Enter Your Email' /> <br />
                <textarea name="address" id="" cols="21" rows="2" placeholder='Enter Your Address'></textarea> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MultipleInput;