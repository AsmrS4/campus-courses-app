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
    const editClick = () => {
        alert('edit');
    };
    const removeClick = () => {
        alert('remove');
    };
    return (
        <>
            <ListItemButton
                sx={{ height: '64px', borderRadius: 1, backgroundColor: '#fff', marginBottom: 1 }}
            >
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
                            onClick={editClick}
                        />
                        <DeleteIcon
                            sx={{
                                color: '#fff',
                                backgroundColor: '#3a8ad9',
                                padding: '6px 6px',
                                borderRadius: '50%',
                                marginRight: '8px',
                            }}
                            onClick={removeClick}
                        />
                    </>
                )}
            </ListItemButton>
        </>
    );
};

export default Item;
