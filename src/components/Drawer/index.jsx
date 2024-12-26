import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import ClassIcon from '@mui/icons-material/Class';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import { logoutUser } from '../../api/account/account';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const logout = async () => {
        await logoutUser();
        navigate('/login');
    };
    const clickProfile = () => {
        navigate('/profile');
    };
    const clickGroups = () => {
        navigate('/groups');
    };
    const DrawerList = (
        <Box sx={{ width: 300 }} role='presentation' onClick={toggleDrawer(false)}>
            <List>
                {['Профиль', 'Выйти'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={index === 0 ? clickProfile : logout}>
                            <ListItemIcon sx={{ color: '#336caf' }}>
                                {index === 0 ? <AccountCircleIcon /> : <LogoutIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Группы', 'Мои курсы', 'Преподаваемые курсы'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={
                                index === 0 ? clickGroups : index === 1 ? clickGroups : clickGroups
                            }
                        >
                            <ListItemIcon sx={{ color: '#336caf' }}>
                                {index === 0 ? (
                                    <GroupsIcon />
                                ) : index === 1 ? (
                                    <ClassIcon />
                                ) : (
                                    <SchoolIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Button onClick={toggleDrawer(true)} sx={{ color: '#fff' }}>
                <MenuIcon sx={{ height: 36, width: 36 }} />
            </Button>
            <Drawer anchor='left' open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}
