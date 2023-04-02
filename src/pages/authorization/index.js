import tpl from './tpl.hbs';
import './style.css';
import inputLoginAuth from "../../components/inputLoginAuth";
import blueButton from "../../components/blueButton";
import hrefReg from "../../components/hrefReg";

const inputsSignIn = {
    inputsSignIn: [
        {
            label: 'Логин',
            name: 'login',
            type: 'text',
            value: 'vadimololo',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
            value: 'vot_takoi_parol132',
        },
    ],
};

const inputsSignUp = {
    inputsSignUp: [
        {
            label: 'Почта',
            name: 'email',
            type: 'email',
            value: 'vadimololo@yandex.ru',
        },
        {
            label: 'Логин',
            name: 'login',
            type: 'text',
            value: 'vot_takoi',
        },
        {
            label: 'Имя',
            name: 'first_name',
            type: 'text',
            value: 'Вадим',
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            type: 'text',
            value: 'Вадимов',
        },
        {
            label: 'Телефон',
            name: 'phone',
            type: 'text',
            value: '+7 (777) 777-77-77',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
            value: 'vot_takoi_parol132',
        },
        {
            label: 'Пароль (ещё раз)',
            name: 'password',
            type: 'password',
            value: 'vot_takoi_parol132',
        },
    ],
};

export const dataAuthorization = {
    titleSignIn: 'Вход',
    inputLoginAuth: inputLoginAuth(inputsSignIn),
    signIn: true,
    blueButtonSignIn: blueButton({value: 'Авторизоваться'}),
    hrefRegSignIn: hrefReg({href: '/sign-up', value: 'Нет аккаунта?'}),
};

export const dataRegistration = {
    titleSignUp: 'Регистрация',
    inputLoginReg: inputLoginAuth(inputsSignUp),
    signUp: true,
    blueButtonSignUp: blueButton({value: 'Зарегистрироваться'}),
    hrefRegSignUp: hrefReg({href: '/sign-in', value: 'Войти'}),
}

const authorizationPage = (data) => {
    return tpl(data);
}

export default authorizationPage;
