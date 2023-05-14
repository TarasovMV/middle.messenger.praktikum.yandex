import tpl from  './tpl.hbs';
import './style.css';
import {data} from './data';

const chatItem = () => {
    return tpl(data);
};

export default chatItem;
