import tpl from './tpl.hbs';
import './style.css';
import {Block} from "../../domain";

interface Text {
    paragraph: string;
}

interface IncomingMessageProps {
    text?: Text[];
    time?: string;
}

export const dataIncomingMessage = {
    text: [
        {
            paragraph: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
        },
        {
            paragraph: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        },
    ],
    time: '11:56',
};

class IncomingMessage extends Block<IncomingMessageProps> {
    constructor(props: IncomingMessageProps) {
        super(tpl, props);
    }
}

function render(block: Block) {
    document.addEventListener('DOMContentLoaded', function () {
        const containerIncomingMessage = document.getElementsByClassName('incoming__chat')[0];
        containerIncomingMessage?.insertBefore(block.getContent(), containerIncomingMessage.firstChild);
        return containerIncomingMessage;
    });

}

export const incomingMessage = (data: IncomingMessageProps) => {
    const incomMes = new IncomingMessage(data);
    render(incomMes);
}
