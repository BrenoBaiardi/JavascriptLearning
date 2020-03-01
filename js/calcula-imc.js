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

  var pesoEValido = validaPeso(peso);
  var alturaEValida = validaAltura(altura);
  var imc = peso / (altura * altura)

  if (!pesoEValido){
    tdImc.textContent = "Peso Inválido";
    pacientes[i].classList.add("paciente-invalido");
  }

  if (!alturaEValida){
    tdImc.textContent = "Altura Inválida";
    pacientes[i].classList.add("paciente-invalido");
  }

  if (pesoEValido && alturaEValida){
    tdImc.textContent = calculaImc(peso,altura);
  }
}

function validaPeso(peso) {
  if (peso>0 && peso<1000){
    return true;
  }
  else{
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura < 3.0){
    return true;
  }
  else{
    return false;
  }
}

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
