const input_1 = document.querySelector('.input_1');
const input_2 = document.querySelector('.input_2');
const result_button = document.querySelector('.result_button');
const result = document.querySelector('.result');
const text_result = document.querySelector('.text_result');

result_button.onclick = function () {
    let a = console.log(input_1.value);
    let b = console.log(input_2.value);
    if(+input_1.value > +input_2.value) {
        console.log('Супер');
        result.style.backgroundColor = ('green');
        result.innerHTML='true'
    }
    else if(+input_1.value < +input_2.value){
        console.log('Шось не те');
        result.style.backgroundColor = ('red');
        result.innerHTML='false'
    }
    else if(+input_1.value == +input_2.value){
        console.log('Баланс');
        result.style.backgroundColor = ('yellow');
        result.innerHTML='equal'
    }
}
