import tpl from './tpl.hbs';
import './style.css';
import {Block} from '../../domain';

interface InputSign {
    label?: string;
    name?: string;
    type?: string;
    value?: string;
}

interface InputsSignIn {
    inputsSignIn: InputSign[];
}

interface InputsSignUp {
    inputsSignUp: InputSign[];
}

export class InputLoginAuth extends Block<InputsSignIn | InputsSignUp> {
    constructor(props: InputsSignIn | InputsSignUp) {
        super(tpl, props);
    }
}
