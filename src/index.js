const root = document.getElementById('root');

const sum = (a, b) => {
    return a + b
};

console.log('Статика')

root.textContent = sum(7, 9).toString();
