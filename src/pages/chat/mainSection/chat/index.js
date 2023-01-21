import  tpl from './tpl.hbs';
import './style.css'
import incomingMessage from "../../../../components/incomingMessage";
import photoMessage from "../../../../components/photoMessage";

const data = {
    photo: '',
    name: 'Вадим',
    settingsSvg: '',
    date: '7 january',
    incomingMessage,
    photoMessage,
};

const chat = () => {
    return tpl(data);
};

export default chat;
