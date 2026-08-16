let button = document.querySelector('#btn');
button.addEventListener('click', function(){
    let input = document.querySelector('#input');
    let task = input.value.trim();
    if(task){
        let items = document.createElement('p');
        items.textContent = task;

        let btn = document.createElement('button');
        btn.textContent = "delete";
        btn.classList.add('delete');
        btn.addEventListener('click', function(){
            btn.parentElement.remove();
        })

        let divison = document.createElement('div');
        divison.appendChild(items)
        divison.appendChild(btn)

        let container = document.querySelector('#cont');
        container.appendChild(divison);

        input.value = ""
    }
});