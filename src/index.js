import tpl from './index.hbs';
import './style.css';
import chatPage from "./pages/chat";
import authorizationPage, {dataAuthorization, dataRegistration} from "./pages/authorization";
import userSettingsPage from "./pages/userSettings";
import page400, {component400} from "./pages/400";
import page500, {component500} from "./pages/500";

const indexData = {
    pages: [
        {
            title: 'Страница авторизации',
            link: 'sign-in',
            pageFunction: authorizationPage,
        },
        {
            title: 'Страница регистрации',
            link: 'sign-up',
            pageFunction: authorizationPage,
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

const indexPage = (data) => {
    return tpl(data);
};

const domain = window.location.origin;

if (window.location.href === `${domain}/`) {
    document.getElementById('root').innerHTML = indexPage(indexData);
} else if (window.location.href === `${domain}/sign-in`) {
    document.getElementById('root').innerHTML = authorizationPage(dataAuthorization);
} else if (window.location.href === `${domain}/sign-up`) {
    document.getElementById('root').innerHTML = authorizationPage(dataRegistration);
} else if (window.location.href === `${domain}/chat`) {
    document.getElementById('root').innerHTML = chatPage();
} else if (window.location.href === `${domain}/userSettings`) {
    document.getElementById('root').innerHTML = userSettingsPage();
} else if (window.location.href === `${domain}/500`) {
    document.getElementById('root').innerHTML = page500(component500);
} else if (window.location.href === `${domain}/404`) {
    document.getElementById('root').innerHTML = page400(component400);
} else return document.getElementById('root').innerHTML = page400(component400);
