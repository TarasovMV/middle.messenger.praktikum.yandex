import tpl from './tpl.hbs';
import './style.css';
import * as backArrow from '../../../../static/backArrow.svg';

const data = {
    backArrow
};

const backSection = () => {
    return tpl(data);
};

export default backSection;
