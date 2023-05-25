const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem")
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const telefone = document.getElementById("telefone");


function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else {
        dados.forEach(elemento =>{
            if (elemento.emailcliente == email){
                msg.innerHTML="E-mail já existe!";
                evento.preventDefault();
            } else {
                criarUsuario(evento);
            }
        }
        );
    }  
}

formulario.onsubmit = (evento) =>{
    if (email.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu E-Mail";
        email.focus();
        return null;
    }

    if (senha.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu Senha";
        senha.focus();
        return null;
    }
    verificarEmail(email.value, evento);
}


function criarUsuario(evento){
    let dados = JSON.parse(localStorage.getItem("bd")) || [];
    dados.push(
        {
        emailcliente : email.value,
        senhacliente : senha.value
        }
    )
    localStorage.setItem("bd", JSON.stringify(dados));
    msg.innerHTML ="Usuário Cadastrado com Sucesso";
    evento.preventDefault();
    setTimeout(()=>{
        window.location.assign("cadastro2.html");
},2000)
    
}