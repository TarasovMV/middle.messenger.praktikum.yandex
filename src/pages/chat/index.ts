import tpl from './tpl.hbs';
import './style.css';
import {ChatsSection} from "./chatsSection";
import {MainSection} from "./mainSection";
import {Block} from "../../domain";

interface ComponentsChatPage {
    chatsSection: ChatsSection;
    mainSection: MainSection;
}

export const components = {
    chatsSection: new ChatsSection(),
    mainSection: new MainSection(),
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
