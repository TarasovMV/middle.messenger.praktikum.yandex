const root = document.getElementById('root');

const sum = (a, b) => {
    return a + b
};

root.textContent = sum(7, 9).toString();
