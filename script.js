function validar(event) {

    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const matricula = document.getElementById("matricula");

    let dataEnvio = document.getElementById("data").value;


    if (nome.value == "" || email.value == "" || telefone.value == "" || matricula.value == "") {

        alert("Nome, email, telefone e matricula são campos obrigatórios!")

        return false;
    }



    if (dataEnvio != "") {
        dataEnvio = new Date(dataEnvio);

        if (dataEnvio > new Date()) {
            alert("A data escolhida é uma data futura, escolha uma data passada ou no presente!")
            return false;
        }
    }


    alert("Avaliação submetida com sucesso!")
    event.target.reset()
    return true;
}