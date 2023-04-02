import tpl from './tpl.hbs';
import './style.css';
import * as noAvatar from '../../../static/noAvatar.svg';
import {Block} from "../../../domain";

interface DataMainSectionProps {
    noAvatar?: typeof noAvatar;
    name?: string;
    normal?: boolean;
    buttonSettings?: Block;
    input?: string;
    change?: boolean;
    inputChange?: string;
    changePassword?: boolean;
    inputsChangePassword?: string;
    simpleButton?: string;
}


export class MainSection extends Block<DataMainSectionProps> {
    constructor(props: DataMainSectionProps) {
        super(tpl, props);
    }
}

