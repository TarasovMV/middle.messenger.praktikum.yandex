import tpl from './tpl.hbs';
import './style.css';
import chat from './chat/index';
import noChat from "./noChat/index";

const components = {
    chat,
    noChat
};

const mainSection = () => {
    return tpl(components)
};

export default mainSection;
