import tpl from './tpl.hbs';
import './style.css';
import chatsSection from "./chatsSection";
import mainSection from "./mainSection";
import {Block} from "../../domain";

interface ComponentsChatPage {
    chatsSection: () => string;
    mainSection: () => string;
}

export const components = {
    chatsSection,
    mainSection
}

function render(block: any) {
    const root = document.getElementById('root');
    root!.appendChild(block.getContent());
    return root;
}

class ChatPage extends Block<ComponentsChatPage> {
    constructor(props: ComponentsChatPage) {
        super(tpl, props);
    }
}

const chatPage = (data: ComponentsChatPage) => {
    const chats = new ChatPage(data);
    render(chats);
};

export default chatPage;
