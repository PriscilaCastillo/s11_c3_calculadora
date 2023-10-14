const operand2 = document.getElementById('operand-2');
console.log(operand2.value);
const Btns = document.getElementById('btns');

Btns.addEventListener('click', (e) => {
    
        if (e.target.id === '=') {
            operand2.textContent = eval(operand2.textContent);
        } else if (e.target.textContent === 'C') {
            operand2.textContent = '';
        } else if (e.target.textContent === '+/-') {
            operand2.textContent = eval(-1 * operand2.textContent);
            console.log(eval(-operand2.textContent));
        } else if(e.target.textContent === "CE"){
            let cadena = operand2.textContent.slice(0,-1);
            operand2.textContent = cadena;
            console.log(cadena)
        } else if(e.target.id != 'btns'){
            operand2.textContent += e.target.id;
            console.log(operand2.textContent);
        } 

})
