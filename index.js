
const inputAnode = document.querySelector('.js-input-a');

const inputBnode = document.querySelector('.js-input-b');

const selectOperationNode = document.querySelector('.js-select-operation');

const btnResultNode = document.querySelector('.js-btn-result');

const OutputNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click' ,function (){
    const a = Number(inputAnode.value);
    const b = Number(inputBnode.value);
    const operation = selectOperationNode.value;

    const result = calculator({
        a,
        b,
        operation
    })

    OutputNode.innerHTML = result;
})