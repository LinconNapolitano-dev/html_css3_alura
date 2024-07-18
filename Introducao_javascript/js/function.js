//Funcao de calculo

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })

}


function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
   
    }

    return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);


    return td
}

//Funcoes de Validacao

function validaPeso(peso){
    if (peso >= 0 && peso <= 300){
        return true
    }else{
        return false;
    }
}


function validaAltura(altura){
    if (altura >= 0 && altura <= 4.00){
        return true
    }else{
        return false;
    }
}

function validaPaciente(paciente){

    var erros = [];

    if (!validaPeso(paciente.peso)) {

       erros.push("O Peso é INVALIDO!!");
    }


    if (!validaAltura(paciente.altura)){

       erros.push("O Altura é INVALIDO!!");

    }

    if (paciente.nome == '') {

       erros.push("O NOME não pode ser em branco!");
    }

    if (paciente.gordura == '') {

       erros.push("A GORDURA não pode ser em branco!");
    }
      if (paciente.peso == '') {

       erros.push("O PESO não pode ser em branco!");
    }
      if (paciente.altura == '') {

       erros.push("O ALTURA não pode ser em branco!");
    }


    return erros;
}

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


