// prompt("Hola soy Joel");
// //Path: main.js
// alert("Estoy trabajando");

// var numero1 = prompt("Introduce un numero");
// var numero2 = prompt("Introduce otro numero");

// var resultado = parseInt(numero1) + parseInt(numero2);
// alert("El resultado es " + resultado);

// let numero1 = 5;
// let numero2 = 10;

// let resultado = numero1 + numero2;
// console.log("Resultados: " , resultado);

const form = document.querySelector("form");
const imput = document.getElementById("btn");

imput.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(form.elements[0].value);
      console.log(form.elements[1].value);

      const nombre = form.elements[0].value;
      const contraseña = form.elements[1].value;

    if(nombre === "Usuario" && contraseña === "usuario123"){
        return window.open("https://wolf0231.github.io/Pagina-web-con-grid/");
    }else{
        return alert("Datos incorrectos");
    }

});

console.log({form, imput});


