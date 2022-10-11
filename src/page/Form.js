import React from 'react';
import MultipleInput from './../Form/MultipleInput';
import Signup from './../Form/Signup';
import SingleForm from './../Form/SingleForm';

const Form = () => {
    return (
        <div>
            <SingleForm></SingleForm>
            <MultipleInput></MultipleInput>
            <Signup></Signup>
        </div>
    );
};

export default Form;