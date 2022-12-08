// Capturar evento de submit do formulário
const form = document.querySelector('#form'); 

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); 
    const inputAltura = e.target.querySelector('#altura'); 

    const peso = Number(inputPeso.value); 
    const altura = Number(inputAltura.value); 

    if (!peso) { 
        setResult('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResult('Altura Inválida', false); 
        return;
    }

    const imc = getImc (peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc}. ${nivelImc}`;

    setResult(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Você está abaixo do peso!', 'Seu peso está dentro do normal!', 'Você está com sobrepeso!', 'Você está com obesidade grau 1!', 'Você está com obesidade grau 2!', 'Você está com obesidade grau 3!']

    if (imc > 39.9) { 
        return nivel[5];
    }
    if (imc > 34.9) {
        return nivel[4];
    }
    if (imc > 29.9) {
        return nivel[3];
    }
    if (imc > 24.9) {
        return nivel[2];
    }
    if (imc > 18.4) {
        return nivel [1];
    }
    if (imc <= 18.4) {
        return nivel[0]
    }
}

// função para calcular imc
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2); 
}

// função para criar parágrafos
function criaP () {
    const p = document.createElement('p'); 
    return p;
}

// função para adicionar o resultado
function setResult(msg, isValid) { 
    const resultado = document.querySelector('.resultado'); 
    resultado.innerHTML = ''; 
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado'); 
    } else {
        p.classList.add('bad'); 
    } 
  
    p.innerHTML = msg;
    resultado.appendChild(p); 
}
