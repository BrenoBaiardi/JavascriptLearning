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
