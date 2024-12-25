import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Link } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import InputField from '../components/InputField/InputField';
import DateField from '../components/InputField/DateField';
import { emailIsValid, isEmpty, passwordIsValid } from '../utils/validation/validation';
import { registryUser } from '../api/account/account';
import { ErrorToast } from '../utils/toast/toast';

const RegistrationPage = () => {
    const [fullName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userDate, setDate] = useState('');
    const [submitDisabled, setDisabled] = useState(true);

    const formIsEmpty = () => {
        if (fullName !== '' && userEmail !== '' && userPassword !== '' && userDate !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await registryUser({
            fullName: fullName,
            birthDate: userDate,
            email: userEmail,
            password: userPassword,
        });
        if (result.ok) {
            console.log(result);
            localStorage.setItem('token', result.token);
        } else {
            console.log(result);
            if (result.status === 400) {
                ErrorToast('Введите корректные данные');
            } else if (result.status === null) {
                ErrorToast(`Email ${userEmail} уже занят`);
            } else {
                ErrorToast(`Не удалось обработать запрос`);
            }
        }
    };

    useEffect(() => {
        formIsEmpty();
    }, [fullName, userEmail, userPassword, userDate]);

    return (
        <>
            <section className='authSection'>
                <div className='authBg'>
                    <div className='head'></div>
                    <div className='body'></div>
                </div>
                <form className='authForm' onSubmit={handleSubmit}>
                    <h2 className='authTitle'>Регистрация</h2>
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
                        />
                        <InputField
                            label={'Пароль'}
                            variant='outlined'
                            validation={passwordIsValid}
                            type={'password'}
                            value={userPassword}
                            handleChange={setPassword}
                        />
                        <Button
                            variant='contained'
                            sx={{ width: 1, margin: 1 }}
                            size='large'
                            type='sumbit'
                            disabled={submitDisabled}
                        >
                            Создать аккаунт
                        </Button>
                        <div className='link'>
                            <span>Уже есть аккаунт?</span>
                            <Link>Войти</Link>
                        </div>
                    </div>
                </form>
            </section>
            <ToastContainer limit={3} />
        </>
    );
};

export default RegistrationPage;
