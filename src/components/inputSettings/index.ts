import tpl from './tpl.hbs';
import './style.css';

interface Input {
    label: string;
    name: string;
    value: string;
    type: string;
    disable: boolean;
}

interface Inputs {
    inputs: Input[];
}

interface InputsChange {
    inputsChange: Input[];
}

interface InputsChangePassword {
    inputsChangePassword: Input[];
}


const inputSettings = (data:Inputs | InputsChange | InputsChangePassword) => {
    return tpl(data);
}

export default inputSettings;
