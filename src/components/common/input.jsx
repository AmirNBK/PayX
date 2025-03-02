import React from 'react';

const Input = ({placeholder , type , }) => {
    return (
        <input placeholder={placeholder} type={type} className={'bg-white px-4 py-3.5 text-[#75788D] rounded-lg'}
        />
    );
};

export default Input;