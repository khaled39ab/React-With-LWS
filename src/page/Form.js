import React from 'react';
import MultipleInput from './../Form/MultipleInput';
import Signup from './../Form/Signup';
import SingleForm from './../Form/SingleForm';
import OthersNavbar from './OthersNavbar';

const Form = () => {
    return (
        <div>
            <OthersNavbar></OthersNavbar>
            <SingleForm></SingleForm>
            <MultipleInput></MultipleInput>
            <Signup></Signup>
        </div>
    );
};

export default Form;