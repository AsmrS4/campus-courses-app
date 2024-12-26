import React, { useState } from 'react';
import { Button } from '@mui/material';
import Header from '../components/Header';
import InputField from '../components/InputField/InputField';
import { emailIsValid } from '../utils/validation/validation';

const ProfilePage = () => {
    const [profileData, setData] = useState({});

    return (
        <>
            <Header />
            <section className='pageContent'>
                <div className='wrapper'>
                    <form className='profileForm'>
                        <h2 className='profileTitle'>Профиль</h2>
                        <div className='container'>
                            <InputField
                                label={'Email'}
                                placeholder={'example@gmail.com'}
                                variant='outlined'
                                validation={emailIsValid}
                                type={'email'}
                            />

                            <Button
                                variant='contained'
                                sx={{ width: 1, margin: 1 }}
                                size='large'
                                type='sumbit'
                            >
                                Сохранить
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
