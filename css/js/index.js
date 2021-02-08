var nome = "Escanor da Silva";
var cargo = "Depevolper";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function logarNome() {
    console.log(nome);
}

function clickNoProjetos(){
    console.log("Clicou no Botão Projetos");
    texto2.style.display = "block"; 
    texto1.style.display = "nome";
}

function clickNoSobre(){
    console.log("Clicou no botão Sobre");
    texto1.style.display = "block"; 
    texto2.style.display = "nome";

}
colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);