import tpl from './tpl.hbs';
import './style.css';
import hrefReg from "../../components/hrefReg";
import errorPage from "../../components/errorPage";

const page404Data = {
    number: '404',
    title: 'Не туда попали',
    hrefReg: hrefReg({href: 'chat', value: 'Назад к чатам'}),
};

export const component400 = {
    errorPage: errorPage(page404Data),
};

export

const page400 = (data) => {
    return tpl(data);
};

export default page400;
