import React from 'react';
import { Button, Link } from '@mui/material';
import InputField from '../components/InputField/InputField';

const RegistrationPage = () => {
    return (
        <>
            <section className='authSection'>
                <div className='authBg'>
                    <div className='head'></div>
                    <div className='body'></div>
                </div>
                <form className='authForm'>
                    <h2 className='authTitle'>Регистрация</h2>
                    <div className='container'>
                        <InputField
                            label={'ФИО'}
                            placeholder={'Иванов Иван Иванович'}
                            variant='outlined'
                            helperText='Поле не должно быть пустым'
                        />
                        <InputField
                            label={'Email'}
                            placeholder={'example@gmail.com'}
                            variant='outlined'
                            helperText='Введите свой Email'
                        />
                        <InputField label={'Пароль'} variant='outlined' helperText=' ' />
                        <Button variant='contained' sx={{ width: 1 }} size='large'>
                            Создать аккаунт
                        </Button>
                        <div className='link'>
                            <span>Уже есть аккаунт?</span>
                            <Link>Войти</Link>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default RegistrationPage;
