let button = document.querySelectorAll('.btn');
button.forEach(button => {
    button.addEventListener('click', () => {
        let holder = document.querySelector('input');
        holder.value += button.textContent;
    })
});

let calc = document.querySelector('.cal');
calc.addEventListener('click', () => {
    let holder = document.querySelector('input');
    let sum = eval(holder.value);
    holder.value = sum
})

let cls = document.querySelector('.cls');
cls.addEventListener('click', () => {
    let holder = document.querySelector('input');
    holder.value = "";
})