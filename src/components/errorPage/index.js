import tpl from './tpl.hbs';
import './style.css';

const errorPage = (data) => {
    return tpl(data);
};

export default errorPage;
