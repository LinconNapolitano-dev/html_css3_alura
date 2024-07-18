var tabela = document.querySelector("table");

tabela.addEventListener("click",function(event){

    //EVENT.TARGET = Seleciona o Alvo
    //parent.Node = Seleciona o "PAI" do Alvo

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){

        event.target.parentNode.remove();

    }, 500);



})

// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("click", function() {
//         this.remove();
//     });
// });