import React from 'react';
import HttpGet from '../Form/HttpGet';
import MultipleInput from './../Form/MultipleInput';
import Signup from './../Form/Signup';
import SingleForm from './../Form/SingleForm';

const Form = () => {
    return (
        <div>
            <SingleForm></SingleForm>
            <MultipleInput></MultipleInput>
            <Signup></Signup>
            <HttpGet></HttpGet>
        </div>
    );
};

export default Form;