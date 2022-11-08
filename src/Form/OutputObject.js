import { useState } from "react";

const OutputObject = () => {
    const [user, setUser] = useState({ name: '', email: '', phone: '', password: '' });
    /* 
        const { name, email, phone, password } = user;
        const handleName = e => {
            setUser({ name: e.target.value, email, phone, password })
        }
    
        const handleEmail = e => {
            setUser({ name, email: e.target.value, phone, password })
        }
    
        const handlePhone = e => {
            setUser({ name, email, phone: e.target.value, password })
        }
    
        const handlePassword = e => {
            setUser({ name, email, phone, password: e.target.value })
        }
     */

    const handleChange = e => {
        // console.log(e.target.name)
        /* 
                const fieldName = e.target.name;
        
                if (fieldName === 'name') {
                    setUser({ name: e.target.value, email, phone, password })
                } else if (fieldName === 'email') {
                    setUser({ name, email: e.target.value, phone, password })
                } else if (fieldName === 'phone') {
                    setUser({ name, email, phone: e.target.value, password })
                } else if (fieldName === 'password') {
                    setUser({ name, email, phone, password: e.target.value })
                }
        */
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center' }}>
            <h1>Send data as object</h1>
            <form action="" onClick={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder='Enter Your Name' name='name' required /> <br />
                <input type="email" onChange={handleChange} placeholder='Enter Your Email' name='email' required /> <br />
                <input type="number" onChange={handleChange} placeholder='Enter Phone Number' name='phone' required /> <br />
                <input type="password" onChange={handleChange} placeholder='Enter Your Password' name='password' required /> <br />
                <input type="submit" value="SignUp Now" />
            </form>
        </div>
    )

}

export default OutputObject;