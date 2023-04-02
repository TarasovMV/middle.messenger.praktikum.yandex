import tpl from './tpl.hbs';
import './style.css';
import * as searchIcon from '/static/search.svg';

const data ={
    value: 'Поиск',
    type: 'text',
    searchIcon,
}

const inputSearchComponent = () => {
    return tpl(data);
}

export default inputSearchComponent;
