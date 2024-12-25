import React from 'react';
import { Button, Link } from '@mui/material';
import InputField from '../components/InputField/InputField';

const LoginPage = () => {
    return (
        <>
            <section className='authSection'>
                <div className='authBg'>
                    <div className='head'></div>
                    <div className='body'></div>
                </div>
                <form className='authForm'>
                    <h2 className='authTitle'>Авторизация</h2>
                    <div className='container'>
                        <InputField
                            label={'Email'}
                            placeholder={'example@gmail.com'}
                            variant='outlined'
                            helperText='Введите свой Email'
                        />
                        <InputField label={'Пароль'} variant='outlined' helperText=' ' />
                        <Button variant='contained' sx={{ width: 1 }} size='large'>
                            Войти
                        </Button>
                        <div className='link'>
                            <span>Нет аккаунта?</span>
                            <Link>Регистрация</Link>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default LoginPage;
