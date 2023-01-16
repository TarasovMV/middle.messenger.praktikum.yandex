import tpl from './index.hbs';
import './styles.css';

const data = {
    layout: 'шаблон',
};

console.log(tpl)

document.getElementById('root').innerHTML = tpl({
    layout: 'шаблон',
});
