// function Cadastrar(){
//     var gameName = document.getElementById("gameId");

//     console.log(gameName.value);

//     if(gameName.value == ""){
//         alert("Nome do jogo deve ser preenchido")
//     }else{
//         alert("Os dados do jogo foram encaminhados com sucesso")
//     }
// }

var btCadastrar = document.querySelector("#cadastrar-id")

btCadastrar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#new-game");
    var name = document.querySelector("#gameId");
    var DescriptionConsole = document.querySelector("select[name='console']");

    var modal = document.querySelector("#modal");

    var message = document.querySelector(".message-show");

    if((name.value == "") || (DescriptionConsole.value == "")){
        message.innerHTML = "Nome do jogo e Console devem ser preenchidos!"
        modal.showModal();
    }else{
        message.innerHTML = "Os dados do jogo foram enviados com sucesso."
        modal.showModal();
    }

    console.log(form);
})