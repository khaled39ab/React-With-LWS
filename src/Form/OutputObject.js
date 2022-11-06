
const OutputObject = () => {

    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center' }}>
            <h1>Send data as object</h1>
            <form action="">
                <input type="text" placeholder='Enter First Name' name='fname' required /> <br />
                <input type="text" placeholder='Enter Last Name' name='lname' required /> <br />
                <input type="email" placeholder='Enter Your Email' name='email' required /> <br />
                <input type="number"  placeholder='Enter Phone Number' name='phone' required /> <br />
                <input type="submit" value="SignUp Now" />
            </form>
        </div>
    )

}

export default OutputObject;