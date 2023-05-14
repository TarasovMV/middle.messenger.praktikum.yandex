import tpl from './tpl.hbs';
import './style.css';
import * as checkSvg from '../../../static/checkSvg.svg';
import {Block} from "../../domain";

interface SentMessageProps {
    text?: string;
    check?: typeof checkSvg;
    time?: string;
}

export const dataSentMessage = {
    text: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    check: checkSvg,
    time: '12:55',
};

class SentMessage extends Block<SentMessageProps> {
    constructor(props: SentMessageProps) {
        super(tpl, props);
    }
}

function render(block: Block) {
    document.addEventListener('DOMContentLoaded', function () {
        const contSentMes = document.getElementsByClassName('messagesSent__chat')[0];
        contSentMes?.appendChild(block.getContent());
        return contSentMes;
    });

}

export const sentMessage = (data: SentMessageProps) => {
    const contMes = new SentMessage(data);
    render(contMes);
}
