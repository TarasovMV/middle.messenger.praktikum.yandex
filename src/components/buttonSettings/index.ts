import tpl from './tpl.hbs';
import './style.css';
import {Block} from '../../domain';

export interface ButtonProps {
    name?: string;
    color?: string;
    href?: string;
}
export interface ButtonsProps {
    buttons?: ButtonProps[];
}

export class ButtonSettings extends Block<ButtonsProps> {
    constructor(props:ButtonsProps) {
        super(tpl, props);
    }
}
