import tpl from './tpl.hbs';
import './style.css';
import {Block} from '../../domain';

interface HrefRegProps {
    href: string;
    value: string;
}

export class HrefReg extends Block {
    constructor(props: HrefRegProps) {
        super(tpl, props);
    }
}
