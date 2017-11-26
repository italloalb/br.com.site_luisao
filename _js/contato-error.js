function validacao() {
    if(document.form.name.value == ""){
        alert("Por favor, preencha o campo nome.");
        document.form.name.focus();
        return false;
    }
    if(document.form.mail.value == ""){
        alert("Por favor, digite um e-mail.");
        document.form.mail.focus();
        return false;
    }

    if(document.form.mail.value.indexOf('@') == -1 || document.form.mail.value.indexOf('.') == -1){
        alert("Por favor, digite um e-mail válido.");
        document.form.mail.focus();
        return false;
    }

    if(document.form.msg.value.length < 10){
        alert("Por favor, preencha o campo mensagem.");
        document.form.msg.focus();
        return false;
    }
}