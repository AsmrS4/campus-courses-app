import React, { useEffect, useState } from 'react';
import { Button, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { getCourses } from '../api/groups/groups';
import Header from '../components/Header';

import Item from '../components/Item/Item';
import { SearchComponent } from '../components/Search/Search';
import { WarningToast } from '../utils/toast/toast';
import { ToastContainer } from 'react-toastify';

const GroupsPage = () => {
    const [courses, setCourses] = useState([]);
    const loadData = async () => {
        const result = await getCourses();
        if (result) {
            setCourses(result);
            console.log(result);
        } else {
            WarningToast('Ваша сессия истекла. Пожалуйста, авторизируйтесь');
        }
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <>
            <Header />
            <section className='pageContent'>
                <div className='wrapper'>
                    <div className='holderHead'>
                        <div className='pageTitle'>
                            <span>Группы кампусных курсов</span>
                        </div>
                        <div>
                            <SearchComponent />
                        </div>
                    </div>
                    <div className='groupsHolder'>
                        <List sx={{ width: 1 }}>
                            {courses.map((item, index) => {
                                return <Item name={item.name} id={item.id} />;
                            })}
                        </List>
                        <ToastContainer limit={1} />
                    </div>
                    <Button
                        variant='contained'
                        sx={{ width: '200px', marginTop: '12px' }}
                        size='large'
                        type='button'
                    >
                        Создать группу
                    </Button>
                </div>
            </section>
        </>
    );
};

export default GroupsPage;
