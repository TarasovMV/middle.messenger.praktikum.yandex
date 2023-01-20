import tpl from './index.hbs';
import './style.css';
import chatPage from "./pages/chat";
import authorizationPage from "./pages/authorization";
import registrationPage from "./pages/registration";
import userSettingsPage from "./pages/userSettings";
import page400 from "./pages/400";
import page500 from "./pages/500";

const data = {
    pages: [
        {
            title: 'Страница авторизации',
            link: 'sign-in',
            pageFunction: authorizationPage,
        },
        {
            title: 'Страница регистрации',
            link: 'registration',
            pageFunction: registrationPage,
        },
        {
            title: 'Страница списка чатов и ленты переписок',
            link: 'chat',
            pageFunction: chatPage,
        },
        {
            title: 'Страница настроек пользователя',
            link: 'userSettings',
            pageFunction: userSettingsPage,
        },
        {
            title: 'Страница 404',
            link: '404',
            pageFunction: page400,
        },
        {
            title: 'Страница 5**',
            link: '500',
            pageFunction: page500,
        },
    ]
};

const domain = 'http://localhost:1234/'; //todo - надо поправить, чтобы через любой адрес запускалось

const indexPage = () => {
    return tpl(data);
};

if (window.location.href === domain) {
    document.getElementById('root').innerHTML = indexPage();
} else if (window.location.href === `${domain}sign-in`) {
    document.getElementById('root').innerHTML = authorizationPage();
} else if (window.location.href === `${domain}registration`) {
    document.getElementById('root').innerHTML = registrationPage();
} else if (window.location.href === `${domain}chat`) {
    document.getElementById('root').innerHTML = chatPage();
} else if (window.location.href === `${domain}userSettings`) {
    document.getElementById('root').innerHTML = userSettingsPage();
} else if (window.location.href === `${domain}500`) {
    document.getElementById('root').innerHTML = page500();
} else if (window.location.href === `${domain}404`) {
    document.getElementById('root').innerHTML = page400();
} else return document.getElementById('root').innerHTML = page400();
