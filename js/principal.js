var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoEValido = true;
var palturaEValida = true;
var imc = peso / (altura * altura)
var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0 || peso >= 1000){
  tdImc.textContent = "Peso Inválido";
  pesoEValido = false;
}

if (altura <= 0 || altura >= 2.5){
  tdImc.textContent = "Altura Inválida";
  palturaEValida = false;
}


if (pesoEValido && palturaEValida){
  tdImc.textContent = imc;
}
else{

}
