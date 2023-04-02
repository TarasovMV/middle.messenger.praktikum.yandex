import tpl from './tpl.hbs';
import './style.css';

interface SimpleButtons {
    name: string;
    type: string;
}

const simpleButton = (data: SimpleButtons) => {
    return tpl(data);
};

export default simpleButton;
