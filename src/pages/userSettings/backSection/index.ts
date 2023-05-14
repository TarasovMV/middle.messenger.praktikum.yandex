import tpl from './tpl.hbs';
import './style.css';
import * as backArrow from '../../../../static/backArrow.svg';

interface ComponentBack {
    backArrow: typeof backArrow;
}

const data: ComponentBack = {
    backArrow
};

const backSection = () => {
    return tpl(data);
};

export default backSection;
