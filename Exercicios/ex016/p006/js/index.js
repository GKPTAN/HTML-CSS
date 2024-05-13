document.getElementById('enviar-email').addEventListener("click", function() {
    var mensagem = document.getElementById('comentario').value;
    var email = "santosamorim2001@gmail.com";
    var assunto = "Comentário do site";
    var conteudo = encodeURIComponent(mensagem);
    var mailtoLink = "mailto:" + email + "?subject=" + assunto + "&body=" + conteudo;

    window.location.href = mailtoLink;
    window.alert("comentário enviado com sucesso");
})