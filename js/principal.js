var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {

  var tdPeso = pacientes[i].querySelector(".info-peso");
  var tdAltura = pacientes[i].querySelector(".info-altura");
  var tdImc = pacientes[i].querySelector(".info-imc");
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEValido = true;
  var palturaEValida = true;
  var imc = peso / (altura * altura)

  if (peso <= 0 || peso >= 1000){
    tdImc.textContent = "Peso Inválido";
    pesoEValido = false;
    pacientes[i].classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 2.5){
    tdImc.textContent = "Altura Inválida";
    palturaEValida = false;
    pacientes[i].classList.add("paciente-invalido");
  }

  if (pesoEValido && palturaEValida){
    tdImc.textContent = imc.toFixed(2);
  }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    var nome = form.nome.value;

    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td");
    nomeTd.textContent = nome;
    var pesoTd = document.createElement("td");
    pesoTd.textContent = peso;
    var alturaTd = document.createElement("td");
    alturaTd.textContent = altura;
    var gorduraTd = document.createElement("td");
    gorduraTd.textContent = gordura;
    var imcTd = document.createElement("td");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    console.log(pacienteTr);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

  }
);
