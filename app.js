export function EX01CALC() {
    const numElement = document.getElementById('EX01Numero');
    if (!numElement) return; 
    const num = parseFloat(numElement.value);
    const result = num > 0 ? `${num} é positivo` : num < 0 ? `${num} é negativo` : 'é zero';
    document.getElementById('EX01res').innerHTML = result;
}

export function EX02CALC() {
    const num1Element = document.getElementById('EX02Numero1');
    const num2Element = document.getElementById('EX02Numero2');
    if (!num1Element || !num2Element) return; // Verifica se os elementos existem
    const num1 = parseInt(num1Element.value);
    const num2 = parseInt(num2Element.value);
    const result = num1 === num2 ? 'Os valores são iguais' : `${num1} é maior que ${num2}`;
    document.getElementById('EX02res').innerHTML = result;
}

export function EX03CALC() {
    const numElement = document.getElementById("EX03Numero");
    if (!numElement) return; 
    let N1 = parseInt(numElement.value);
    let result;
    switch(N1) {
        case 1: result = "um"; break;
        case 2: result = "dois"; break;
        case 3: result = "três"; break;
        case 4: result = "quatro"; break;
        case 5: result = "cinco"; break;
        default: result = `É só até 5 amigão😒, não ${N1}`; break;
    }
    document.getElementById("EX03res").innerHTML = result;
}

export function EX04CALC() {
    const numElement = document.getElementById("EX04Numero");
    if (!numElement) return; 
    let N1 = parseFloat(numElement.value);
    if (N1 === 0) {
        document.getElementById("EX04res").innerHTML = "Veículo Free, cara de sorte";
        return;
    }
    const comb = document.getElementsByName("EX04combustivel");
    let resdes, res;
    if (comb[0].checked) {
        resdes = (25 / 100) * N1;
    } else if (comb[1].checked) {
        resdes = (21 / 100) * N1;
    } else {
        resdes = (14 / 100) * N1;
    }
    res = N1 - resdes;
    document.getElementById("EX04res").innerHTML = `Seu Veículo Irá ganhar R$${resdes.toFixed(2)} de desconto, ele irá ficar um total de R$${res.toFixed(2)}`;
}

export function EX05CALC() {
    const nomeElement = document.getElementById("EX05Nome");
    const numElement = document.getElementById("EX05Numero2");
    if (!nomeElement || !numElement) return; 
    let nome = nomeElement.value;
    let N1 = parseFloat(numElement.value);
    let salinf = document.getElementsByName("EX05salario");
    if (N1 === 0) {
        document.getElementById("EX05res").innerHTML = "Salário não identificado";
        return;
    }
    let resdes;
    if (salinf[0].checked) {
        resdes = (50 / 100) * N1;
    } else if (salinf[1].checked) {
        resdes = (20 / 100) * N1;
    } else if (salinf[2].checked) {
        resdes = (15 / 100) * N1;
    } else {
        resdes = (10 / 100) * N1;
    }
    let res = N1 + resdes;
    document.getElementById("EX05res").innerHTML = `Nome: ${nome}<br/>Reajuste: R$${resdes.toFixed(2)}<br/>Salário atual: R$${res.toFixed(2)}`;
}

export function EX06CALC() {
    const numElement = document.getElementById("EX06Numero");
    if (!numElement) return; 
    let N1 = parseInt(numElement.value);
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const result = (N1 >= 1 && N1 <= 12) ? `Mês: ${meses[N1 - 1]}` : "Mês inválido!";
    document.getElementById("EX06res").innerHTML = result;
}