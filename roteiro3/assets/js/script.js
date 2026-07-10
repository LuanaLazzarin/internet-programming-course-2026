// alert('Olá, seja bem-vindo ao nosso site!');

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulário enviado!");
    alert("Formulário enviado!");

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    alert(nome);
}); 

