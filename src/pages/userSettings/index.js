import tpl from './tpl.hbs';
import './style.css';
import backSection from "./backSection";
import mainSection from "./mainSection";
import buttonSettings from "../../components/buttonSettings";
import * as noAvatar from '../../../static/noAvatar.svg';
import inputSettings from "../../components/inputSettings";

const buttons = {
    buttons: [
        {
            name: 'Изменить данные',
            color: '#3369F3',
            href: '/'
        },
        {
            name: 'Изменить пароль',
            color: '#3369F3',
            href: '/'
        },
        {
            name: 'Выйти',
            color: '#FF0000',
            href: '/'
        },
    ]
}

const inputs = {
    inputs: [
        {
            label: 'Почта',
            name: 'email',
            value: 'pochta@yandex.ru',
            type: 'text',
            disable: true,
        },
        {
            label: 'Логин',
            name: 'login',
            value: 'VadimVadimich',
            type: 'text',
            disable: true,
        },
        {
            label: 'Имя',
            name: 'first_name',
            value: 'Вадим',
            type: 'text',
            disable: true,
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            value: 'Вадимов',
            type: 'text',
            disable: true,
        },
        {
            label: 'Имя в чате',
            name: 'display_name',
            value: 'Вадимыч',
            type: 'text',
            disable: true,
        },
        {
            label: 'Телефон',
            name: 'phone',
            value: '+7 (777) 777-77-77',
            type: 'text',
            disable: true,
        },
    ]
}

const dataMainSection = {
    photo: false,
    noAvatar: noAvatar,
    name: 'Вадим',
    buttonSettings: buttonSettings(buttons),
    input: inputSettings(inputs),
};

const data = {
    backSection,
    mainSection: mainSection(dataMainSection),
};

const userSettingsPage = () => {
    return tpl(data);
};

export default userSettingsPage;
