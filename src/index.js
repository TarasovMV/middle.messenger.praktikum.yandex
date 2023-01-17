import tpl from './index.hbs';
// import './globalStyles.css';

const data = {
    layout: 'шаблон',
};

document.getElementById('root').innerHTML = tpl(data);

