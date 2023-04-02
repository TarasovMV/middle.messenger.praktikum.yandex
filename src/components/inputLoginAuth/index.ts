import tpl from './tpl.hbs';
import './style.css';
import {Block} from '../../domain';

// TODO: Добавить поля для интерфейса свойств
export interface InputLoginAuthProps {}

export class InputLoginAuth extends Block<InputLoginAuthProps> {
    constructor(props: any) {
        super(tpl, props);
    }
}
