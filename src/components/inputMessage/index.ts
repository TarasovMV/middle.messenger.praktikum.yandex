import tpl from './tpl.hbs';
import './style.css';
import {Block} from "../../domain";

interface InputMessageProps {
    value?: string;
    type?: string;
}

export const dataInputMessage = {
    value: 'Сообщение',
    type: 'text',
};

export class InputMessage extends Block<InputMessageProps> {
    constructor(props: InputMessageProps) {
        super(tpl, props);
    }
}

function render(block: Block) {
    document.addEventListener('DOMContentLoaded', function () {
        const containerIncomingMessage = document.getElementsByClassName('footer__chat')[0];
        containerIncomingMessage?.insertBefore(block.getContent(), containerIncomingMessage.lastElementChild);
        return containerIncomingMessage;
    });

}

export const inputMessage = (data: InputMessageProps) => {
    const inpMes = new InputMessage(data);
    render(inpMes);
}

// const inputMessage = () => {
//   return tpl(data);
// };
//
// export default inputMessage;
