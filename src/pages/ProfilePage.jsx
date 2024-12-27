import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Header from '../components/Header';
import InputField from '../components/InputField/InputField';
import DateField from '../components/InputField/DateField';
import { emailIsValid, isEmpty } from '../utils/validation/validation';
import { getUserProfile } from '../api/account/account';
import { ErrorToast, WarningToast } from '../utils/toast/toast';
import { ToastContainer } from 'react-toastify';
import { ERROR_401, SERVER_ERROR } from '../utils/constants';

const ProfilePage = () => {
    const [fullName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userDate, setDate] = useState('');

    const fetchUserProfile = async () => {
        const result = await getUserProfile();
        if (result.ok) {
            let data = await result.json();
            setName(data.fullName);
            setEmail(data.email);
            setDate(data.birthDate);
        } else {
            if (result.status === 401) {
                WarningToast(ERROR_401);
            } else {
                ErrorToast(SERVER_ERROR);
            }
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);
    return (
        <>
            <Header />
            <section className='pageContent'>
                <div className='wrapper'>
                    <form className='profileForm' onSubmit={handleSubmit}>
                        <h2 className='profileTitle'>Профиль</h2>
                        <div className='container'>
                            <InputField
                                label={'ФИО'}
                                placeholder={'Иванов Иван Иванович'}
                                variant='outlined'
                                validation={isEmpty}
                                value={fullName}
                                handleChange={setName}
                            />
                            <DateField value={userDate} handleChange={setDate} />
                            <InputField
                                label={'Email'}
                                placeholder={'example@gmail.com'}
                                variant='outlined'
                                validation={emailIsValid}
                                type={'email'}
                                value={userEmail}
                                handleChange={setEmail}
                                isDisabled={true}
                            />

                            <Button
                                variant='contained'
                                sx={{ width: 1, margin: 1 }}
                                size='large'
                                type='sumbit'
                            >
                                Изменить данные
                            </Button>
                        </div>
                    </form>
                    <ToastContainer limit={1} />
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
