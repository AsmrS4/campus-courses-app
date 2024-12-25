import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, ListItemButton, ListItemText } from '@mui/material';

const Item = ({ name = '', id = '' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${id}`);
    };
    return (
        <>
            <ListItemButton sx={{ borderRadius: 1, marginY: 1 }}>
                <ListItemText onClick={handleClick} primary={name} />
            </ListItemButton>
            <Divider />
        </>
    );
};

export default Item;
