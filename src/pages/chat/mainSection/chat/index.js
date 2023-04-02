import  tpl from './tpl.hbs';
import './style.css'
import incomingMessage from "../../../../components/incomingMessage";
import photoMessage from "../../../../components/photoMessage";
import * as settings from '../../../../../static/settingsDots.svg';
import * as clip from '../../../../../static/clip.svg';
import * as sentArrow from '../../../../../static/sentArrow.svg';
import * as noAvatar from '../../../../../static/noAvatar.svg';
import sentMessage from "../../../../components/sentMessage";
import inputMessage from "../../../../components/inputMessage";

const data = {
    photo: false,
    noAvatar: noAvatar,
    name: 'Вадим',
    settingsSvg: settings,
    date: '7 january',
    clipSvg: clip,
    sent: sentArrow,
    incomingMessage,
    photoMessage,
    sentMessage,
    inputMessage,
};

const chat = () => {
    return tpl(data);
};

export default chat;
