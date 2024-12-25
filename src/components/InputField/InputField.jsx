import React, { useState } from 'react';
import { TextField } from '@mui/material';

const InputField = ({
    label = '',
    helperText = ' ',
    placeholder = '',
    valiant = 'outlined',
    validation = null,
}) => {
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);
    const handleValue = (inputValue) => {
        if (validation !== null) {
            setIsError(validation(inputValue));
        }
    };
    return (
        <>
            <TextField
                error={isError}
                label={label}
                placeholder={placeholder}
                variant={valiant}
                helperText={helperText}
                value={value}
                sx={{ width: 1, margin: 1 }}
                onChange={(e) => {
                    setValue(e.target.value);
                    handleValue(e.target.value);
                }}
            />
        </>
    );
};

export default InputField;
