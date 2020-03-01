var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")

    var paciente = obtemPacienteForm(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente)

    if (erros.length > 0){
      exibeMensagensDeErro(erros)
      return; //breaks function
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""

    form.reset();
  }
);

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro")
  ul.innerHTML = ""
  erros.forEach(function(erro){
  var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li)
  })

}

function obtemPacienteForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
  }
  return paciente;
}

 function montaTr(paciente){
  var pacienteTr = document.createElement("tr")
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente){
  var erros = [];
  if (!validaAltura(paciente.altura)) erros.push("Altura inválida");
  if (!validaPeso(paciente.peso)) erros.push("Peso inválido");
  if (paciente.nome.length == 0){
    erros.push("O nome não pode ser nulo")
  }
  if (paciente.gordura.length == 0){
    erros.push("Gordura não pode ser nula")
  }
  if (paciente.peso.length == 0){
    erros.push("Peso não pode ser nulo")
  }
  if (paciente.altura.length == 0){
    erros.push("Altura não pode ser nula")
  }
  return erros;
}
