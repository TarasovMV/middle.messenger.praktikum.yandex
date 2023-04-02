import tpl from './tpl.hbs';
import './style.css';

const data = {
    text: 'Выберите чат чтобы отправить сообщение',
};

const noChat = () => {
    return tpl(data);
};

export default noChat;
