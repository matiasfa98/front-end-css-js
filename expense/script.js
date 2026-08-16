
let sum = 0
let btn = document.querySelector("#btn");
btn.addEventListener('click', function(){

    let val_1 = document.querySelector('#type');
    let task_1 = val_1.value.trim();
    let val_2 = document.querySelector('#cost');
    let task_2 = val_2.value.trim();
    const cheack = isNaN(task_2)
    if(task_1 && task_2 && !cheack){
        let type_container = document.createElement('span')
        type_container.textContent = task_1;

        let cost_container = document.createElement('span');
        cost_container.textContent = `$${task_2}`;

        
        sum += Number(task_2)
        let spent = document.querySelector('#spent');
            spent.textContent = `$${sum}`
        let button = document.createElement('button');
        button.textContent = 'delete'
        button.addEventListener('click', function(){
        sum -= Number(task_2);
        let spent = document.querySelector('#spent');
        spent.textContent = `$${sum}`
        button.parentElement.remove();
        })

        let container = document.createElement('div');
        container.appendChild(type_container);
        container.appendChild(cost_container);
        container.appendChild(button);

        let container_0 = document.querySelector('.cont');
       container_0.appendChild(container)
        
        val_1.value = "";
        val_2.value = "";
        }
    
    else if(cheack){
        alert("pleas enter a number ")
    }
    else{
        alert("pleas fill the two input")
    }


})
