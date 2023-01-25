import tpl from './tpl.hbs';
import './style.css';
import hrefReg from "../../components/hrefReg";
import errorPage from "../../components/errorPage";

const page500Data = {
    number: '500',
    title: 'Упс... Уже устраняем!',
    hrefReg: hrefReg({href: 'chat', value: 'Назад к чатам'}),
};

export const component500 = {
    errorPage: errorPage(page500Data),
}

const page500 = (data) => {
    return tpl(data);
};

export default page500;
