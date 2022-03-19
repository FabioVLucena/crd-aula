var botaoAdicionar = document.querySelector("#adicionar-livro");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var paciente = getPaciente(form);
   
    adicionaPacienteNaTabela(paciente);

    form.reset();
})

function getPaciente(form){
    var paciente = {
        nome: form.livro.value,
        autor: form.autor.value
    }
    return paciente;
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.autor, "info-atuor"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

