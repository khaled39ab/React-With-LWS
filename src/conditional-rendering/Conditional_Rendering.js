import React, { Component } from 'react';
import Login from './Login';
import Permission from './Permission';

class Conditional_Rendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
/* 
        if (this.state.isLoggedIn) {
            return <Permission></Permission>
        } else {
            return <Login></Login>
        }
         */

        const {isLoggedIn} = this.state;

        return ( 
            <div>
                {isLoggedIn ? <Permission></Permission>:<Login></Login>}
            </div>
        ) 
        
    }
}

export default Conditional_Rendering;