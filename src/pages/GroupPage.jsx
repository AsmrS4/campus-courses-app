import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Button } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import GroupCard from '../components/GroupCard';
import Header from '../components/Header';
import { getCourseById } from '../api/groups/groups';
import { ErrorToast } from '../utils/toast/toast';

const GroupPage = () => {
    const { id } = useParams();
    const [courses, setCourses] = useState([]);
    const fetchData = async () => {
        const result = await getCourseById(id);
        if (result) {
            setCourses(result);
            console.log(result);
        } else {
            ErrorToast('Не удалось обработать запрос');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <section className='pageContent'>
                <div className='wrapper'>
                    <div className='holderHead outlined'>
                        <div className='pageTitle'>
                            <span>Список курсов</span>
                        </div>
                        <div>
                            <Button
                                variant='outlined'
                                sx={{
                                    width: '200px',
                                    backgroundColor: '#3a8ad9',
                                    color: ' #fff',
                                    textAlign: 'center',
                                    border: 'none',
                                }}
                                size='large'
                                type='button'
                            >
                                Создать Курс
                            </Button>
                        </div>
                    </div>
                    <div className='groupsHolder outlined'>
                        <List sx={{ width: 1 }}>
                            {courses.map((item) => {
                                return <GroupCard {...item} />;
                            })}
                        </List>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GroupPage;
