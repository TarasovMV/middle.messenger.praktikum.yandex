import tpl from './tpl.hbs';
import './style.css';

const data = {
    value: 'Сообщение',
    type: 'text',
};

const inputMessage = () => {
  return tpl(data);
};

export default inputMessage;
