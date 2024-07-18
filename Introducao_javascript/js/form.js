titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}

// botaoAdicionar.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log("Fui Clicado")
// });


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
 
    //Funcao para pegar dados do Formulario

    var paciente = obtemPacienteDoFormulario(form);

   //Funcao para montar a tabela com os dados do Formulario
    var pacienteTr = montaTr(paciente);

    // VALIDANDO (Peso ou Altura Invalido)

    var erros = validaPaciente(paciente);

    console.log(erros);

    if (erros.length > 0) {

        exibeMensagensErro(erros);

        return;
        
    }  //Fim da VALIDACAO

   
    adicionaPacienteTabela(paciente);


    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagensErro = document.querySelector ("#mensagens-erro")
    mensagensErro.innerHTML = "";

});
