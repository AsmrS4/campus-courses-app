import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router';

import InputField from '../components/InputField/InputField';
import { emailIsValid, passwordIsValid } from '../utils/validation/validation';
import { loginUser } from '../api/account/account';
import { ErrorToast } from '../utils/toast/toast';

const LoginPage = () => {
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [submitDisabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const formIsEmpty = () => {
        if (userEmail !== '' && userPassword !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await loginUser({
            email: userEmail,
            password: userPassword,
        });

        if (result.token) {
            console.log(result.token);
            localStorage.setItem('token', result.token);
            navigate('/groups');
        } else {
            ErrorToast('Неверный логин или пароль');
        }
    };

    useEffect(() => {
        formIsEmpty();
    }, [userEmail, userPassword]);

    return (
        <>
            <section className='authSection'>
                <div className='authBg'>
                    <div className='head'></div>
                    <div className='body'></div>
                </div>
                <form className='authForm' onSubmit={handleSubmit}>
                    <h2 className='authTitle'>Авторизация</h2>
                    <div className='container'>
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
                            Войти
                        </Button>
                        <div className='link'>
                            <span>Нет аккаунта?</span>
                            <Link to={'/registration'}>Регистрация</Link>
                        </div>
                    </div>
                </form>
            </section>
            <ToastContainer limit={3} />
        </>
    );
};

export default LoginPage;
