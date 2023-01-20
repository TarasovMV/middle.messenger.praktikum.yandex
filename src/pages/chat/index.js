import tpl from './tpl.hbs';
import './style.css';
import chatsSection from "./chatsSection";
import mainSection from "./mainSection";

const components = {
    chatsSection,
    mainSection
}

const chatPage = () => {
    return tpl(components);
};

export default chatPage;
