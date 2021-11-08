//Campos de letras y numeros
const letter = document.getElementById("letter");
const number = document.getElementById("number");

//Botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const cn = document.getElementById("cn");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");

//Funciones

const fnA1 = () => {
    letter.innerHTML = "A";
    number.innerHTML = "1";
};

const fnB2 = () => {
    if (letter.innerHTML == "A" && number.innerHTML == "1") {
        letter.innerHTML += "B";
        number.innerHTML += "2";
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnC3 = () => {
    if (letter.innerHTML == "AB" && number.innerHTML == "12") {
        letter.innerHTML += "C";
        number.innerHTML += "3";
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnD4 = () => {
    if (letter.innerHTML == "ABC" && number.innerHTML == "123") {
        letter.innerHTML += "D";
        number.innerHTML += "4";
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnE5 = () => {
    if (letter.innerHTML == "ABCD" && number.innerHTML == "1234") {
        letter.innerHTML += "E";
        number.innerHTML += "5";
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnF6 = () => {
    if (letter.innerHTML == "ABCDE" && number.innerHTML == "12345") {
        letter.innerHTML += "F";
        number.innerHTML += "6"
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnG7 = () => {
    if (letter.innerHTML == "ABCDEF" && number.innerHTML == "123456") {
        letter.innerHTML += "G";
        number.innerHTML += "7";
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnH8 = () => {
    if (letter.innerHTML == "ABCDEFG" && number.innerHTML == "1234567") {
        letter.innerHTML += "H";
        number.innerHTML += "8"
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnI9 = () => {
    if (letter.innerHTML == "ABCDEFGH" && number.innerHTML == "12345678") {
        letter.innerHTML += "I";
        number.innerHTML += "9"
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnCN = () => {
    number.innerHTML = "";
};

const fnJ0 = () => {
    if (letter.innerHTML == "ABCDEFGHI" && number.innerHTML == "123456789") {
        letter.innerHTML += "J";
        number.innerHTML += "0";
    } else {
        alert("Faltan letras o numeros...")
    }
};

const fnCL = () => {
    letter.innerHTML = "";
};

//Eventos
a1.onclick = () => {
    fnA1();
};

b2.onclick = () => {
    fnB2();
};

c3.onclick = () => {
    fnC3();
};

d4.onclick = () => {
    fnD4();
};

e5.onclick = () => {
    fnE5();
};

f6.onclick = () => {
    fnF6();
};

g7.onclick = () => {
    fnG7();
};

h8.onclick = () => {
    fnH8();
};

i9.onclick = () => {
    fnI9();
};

cn.onclick = () => {
    fnCN();
};

j0.onclick = () => {
    fnJ0();
};

cl.onclick = () => {
    fnCL();
};