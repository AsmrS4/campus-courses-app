import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Divider, ListItemButton, ListItemText } from '@mui/material';

const Item = ({ name = '', id = '', isAdmin = false }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${id}`);
    };
    return (
        <>
            <ListItemButton sx={{ borderRadius: 1, marginY: 1 }}>
                <ListItemText onClick={handleClick} primary={name} />
                {isAdmin && (
                    <>
                        <EditIcon
                            sx={{
                                color: '#fff',
                                backgroundColor: '#3a8ad9',
                                padding: '6px 6px',
                                borderRadius: '50%',
                                marginRight: '8px',
                            }}
                        />
                        <DeleteIcon
                            sx={{
                                color: '#fff',
                                backgroundColor: '#3a8ad9',
                                padding: '6px 6px',
                                borderRadius: '50%',
                                marginRight: '8px',
                            }}
                        />
                    </>
                )}
            </ListItemButton>
            <Divider />
        </>
    );
};

export default Item;
