import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#3a8ad9',
    '&:hover': {
        backgroundColor: '#3a8ad9',
    },
    marginLeft: 0,

    width: '300px',
    [theme.breakpoints.up('sm')]: {
        width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#fff',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '200px',
            '&:focus': {
                width: '240px',
            },
        },
    },
}));

export const SearchComponent = () => {
    const [searchValue, setValue] = React.useState('');
    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon sx={{ color: '#fff' }} />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder='Найти группу'
                    value={searchValue}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </Search>
        </>
    );
};
