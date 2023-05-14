import tpl from './tpl.hbs';
import './style.css'
import {dataIncomingMessage, incomingMessage} from "../../../../components/incomingMessage";
import {photoMessage, dataPhotoMessage} from "../../../../components/photoMessage";
import * as settings from '../../../../../static/settingsDots.svg';
import * as clip from '../../../../../static/clip.svg';
import * as sentArrow from '../../../../../static/sentArrow.svg';
import * as noAvatar from '../../../../../static/noAvatar.svg';
import {sentMessage, dataSentMessage} from "../../../../components/sentMessage";
import {dataInputMessage, inputMessage} from "../../../../components/inputMessage";

interface DataChat {
    photo?: boolean;
    noAvatar?: typeof noAvatar;
    name?: string;
    settingsSvg?: typeof settings;
    date?: string;
    clipSvg?: typeof clip;
    sent?: typeof sentArrow;
    incomingMessage?: void;
    photoMessage?: void;
    sentMessage?: void;
    inputMessage?: void;
}

const data: DataChat = {
    photo: false,
    noAvatar: noAvatar,
    name: 'Вадим',
    settingsSvg: settings,
    date: '7 january',
    clipSvg: clip,
    sent: sentArrow,
    incomingMessage: incomingMessage(dataIncomingMessage),
    photoMessage: photoMessage(dataPhotoMessage),
    sentMessage: sentMessage(dataSentMessage),
    inputMessage: inputMessage(dataInputMessage),
};

const chat = () => {
    return tpl(data);
};

export default chat;
