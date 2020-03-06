var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
  event.target.parentNode.remove(); //atrelado ao evento
});



// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//       this.remove(); //atrelado ao evento
//     });
// });
