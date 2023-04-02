import tpl from './index.hbs';
import './style.css';
import  authorizationPage  from './pages/authorization';
import ChatPage, {components} from './pages/chat';
import  userSettingsPage  from './pages/userSettings';
import page400, { component400 } from './pages/400';
import page500, { component500 } from './pages/500';
import chatPage from "./pages/chat";

interface Page {
    title: string;
    link: string;
    pageFunction: () => string;
}

interface IndexData {
    pages: Page[];
}

const indexData: IndexData = {
    pages: [
        {
            title: 'Страница авторизации',
            link: 'sign-in',
            pageFunction: authorizationPage.bind(null, 'auth'),
        },
        {
            title: 'Страница регистрации',
            link: 'sign-up',
            pageFunction: authorizationPage.bind(null, 'reg'),
        },
        {
            title: 'Страница списка чатов и ленты переписок',
            link: 'chat',
            pageFunction: ChatPage,
        },
        {
            title: 'Страница настроек пользователя',
            link: 'userSettings',
            pageFunction: userSettingsPage,
        },
        {
            title: 'Страница 404',
            link: '404',
            pageFunction: () => page400(component400),
        },
        {
            title: 'Страница 5**',
            link: '500',
            pageFunction: () => page500(component500),
        },
    ],
};

const indexPage = (data: IndexData) => {
    return tpl(data);
};

const domain = window.location.origin;

if (window.location.href === `${domain}/`) {
    document.getElementById('root')!.innerHTML = indexPage(indexData);
} else if (window.location.href === `${domain}/sign-in`) {
    authorizationPage('auth');
} else if (window.location.href === `${domain}/sign-up`) {
    authorizationPage('reg');
} else if (window.location.href === `${domain}/chat`) {
    chatPage(components);
} else if (window.location.href === `${domain}/userSettings`) {
    userSettingsPage();
} else if (window.location.href === `${domain}/500`) {
    page500(component500);
} else {
    page400(component400);
}

