let display = document.getElementById('display');
let equation = '';

function appendToDisplay(value) {
  equation += value;
  display.value = equation;
}

function clearDisplay() {
  equation = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(equation);
    display.value = result;
    equation = result.toString();
  } catch (error) {
    display.value = 'Erro';
  }
}

// Evento de teclado
document.addEventListener('keydown', (event) => {
  const key = event.key;

  // Verificar se a tecla F11 foi pressionada
  if (key === 'F11') {
    return;
  }

  // Teclas numéricas e operadores
  if (/^[0-9+\-*/.]$/.test(key)) {
    event.preventDefault();
    appendToDisplay(key);
  }

  // Tecla Enter (calcular resultado)
  if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  }

  // Tecla Backspace (limpar display)
  if (key === 'Backspace') {
    event.preventDefault();
    equation = equation.slice(0, -1);
    display.value = equation;
  }
});

// Código JavaScript da calculadora (calculadora.js)
function updateTime() {
  const now = new Date();
  const dateElement = document.getElementById('date');
  const timeElement = document.getElementById('time');
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString('pt-BR', options);
  const time = now.toLocaleTimeString('pt-BR');

  dateElement.textContent = date;
  timeElement.textContent = time;
}

// Atualizar o relógio a cada segundo
setInterval(updateTime, 1000);

// Restante do código da calculadora ...
