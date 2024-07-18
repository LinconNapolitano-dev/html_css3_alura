var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
	console.log("Buscando Pacientes");

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){

		var resposta = xhr.responseText;
		//console.log(resposta);
		//console.log(typeof resposta);

		var pacientes = JSON.parse(resposta);
		//console.log(pacientes);
		//console.log(typeof pacientes);

		pacientes.forEach(function(paciente) {
            adicionaPacienteTabela(paciente);
        });

	})
	xhr.send();
})