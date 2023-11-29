const textos = [ 
    'Hello, Welcome!',
    'Hola, Bienvenido!',
    'Ciao, Benvenuto!',
    'Bonjour, Bienvenue!',
    '你好，欢迎！',
    'Привет, Добро пожаловать!',
    'Hallo, Welkom!',
    'Olá, Seja bem-vindo!'
]

var trocaLang = document.querySelector(".msg-lang");

let indice = 0;

function attText() {
    trocaLang.textContent = textos[indice];
    indice = (indice + 1) % textos.length;
}

setInterval(attText, 2000);
