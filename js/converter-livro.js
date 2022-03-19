var variavel = document.querySelectorAll(".paciente");
console.log(variavel); 

var i = 0;
variavel.forEach(function(paciente){
    var nomeLivro = paciente.querySelector(".info-nome");
    nomeLivro.textContent = "livro"+i;

    var nomeAutor = paciente.querySelector(".info-autor");
    nomeAutor.textContent = "autor"+i;

    i++;
})
