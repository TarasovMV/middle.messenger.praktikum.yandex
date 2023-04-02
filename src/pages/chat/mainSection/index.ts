import tpl from './tpl.hbs';
import './style.css';
import chat from './chat/index';
import noChat from "./noChat/index";

interface ComponentsMainSection {
    chat: () => string;
    noChat: () => string;
}

const components: ComponentsMainSection = {
    chat,
    noChat
};

const mainSection = () => {
    return tpl(components)
};

export default mainSection;
