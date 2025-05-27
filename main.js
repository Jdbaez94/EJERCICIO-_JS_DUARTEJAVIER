
function verificar_delimitadores(expresion) {
    const stack = [];
    const delimitadores = {
        '(': ')',
        '{': '}',
        '[': ']',
        '<': '>'
    };

    for (let char of expresion) {
        if (delimitadores[char]) {
            stack.push(delimitadores[char]);
        } else if (Object.values(delimitadores).includes(char)) {
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
var expresion = prompt("Ingrese una expresión con delimitadores: ");
if (verificar_delimitadores(expresion)) {
    console.log("La expresión tiene los delimitadores correctamente balanceados.");
}
else {
    console.log("La expresión NO tiene los delimitadores correctamente balanceados.");
}