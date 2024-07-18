
//  Selecionando a elementos. 
var titulo = document.querySelector(".titulo");

var subTitulo = document.querySelector("#subTitulo");

// alterando o conteudo. 

titulo.textContent = "Aparecida Nutricionista";

subTitulo.textContent = "Meus Clientes";

var pacientes = document.querySelectorAll(".paciente");


for (i = 0; i <= pacientes.length ; i++){

   var paciente = pacientes [i];

   //Selecionando elemento dentro de outro elemento.

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imcPaciente = paciente.querySelector(".info-imc");
    imcPaciente.textContent = imc;

    //Validadando o peso e a altura e calculando o imc

    var pesoValido = true;
    var alturaValido = true;

    if(peso <= 0 || peso > 300) {
        //console.log("Peso Inválido");
        pesoValido = false;
        imcPaciente.textContent = "Peso Invalido";
        paciente.classList.add("pacienteInvalido");
    } 

    if (altura <= 0 || altura > 3.00){
        //console.log ("Altura Invalida")
        alturaValido = false;
        imcPaciente.textContent = "Altura Invalida";
        paciente.classList.add("pacienteInvalido");
    }

    if (alturaValido && pesoValido){
        var imc = peso / (altura*altura);
        imcPaciente.textContent = imc.toFixed(2) ;
    }

}

//-------- Funcao Nomeada

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    //console.log("Olá eu fui clicado!");
}

 //----- Funcao Anonima--------

//  titulo.addEventListener("click", function(){  
//     console.log("Olá eu fui clicado!");
// })

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    //console.log("Fui Clicado")
});

