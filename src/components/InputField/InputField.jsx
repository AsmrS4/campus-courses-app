import React, { useState } from 'react';
import { TextField } from '@mui/material';

const InputField = ({
    label = '',
    placeholder = '',
    valiant = 'outlined',
    validation = null,
    type = 'text',
    value = '',
    handleChange = null,
    isDisabled = false,
}) => {
    const [isError, setIsError] = useState(false);
    const handleValue = (inputValue) => {
        if (validation !== null) {
            setIsError(validation(inputValue));
        }
    };

    return (
        <>
            <TextField
                error={isError && value !== ''}
                label={label}
                placeholder={placeholder}
                variant={valiant}
                value={value}
                sx={{ width: 1, marginBottom: 4 }}
                type={type}
                onChange={(e) => {
                    handleChange(e.target.value);
                    handleValue(e.target.value);
                }}
                disabled={isDisabled}
            />
        </>
    );
};

export default InputField;
