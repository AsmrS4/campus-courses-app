import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateField = ({ value = '', handleChange = null }) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{ width: 1, marginBottom: 4 }}
                    label='Дата рождения'
                    value={value ? dayjs(value) : null}
                    onChange={(newValue) => {
                        handleChange(newValue);
                    }}
                />
            </LocalizationProvider>
        </>
    );
};

export default DateField;
