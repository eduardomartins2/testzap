$(document).ready(function() {
    var socket = io("localhost:5000")
    socket.on("connect", function() {
        console.log("conectou");
    });

    socket.on("message", function(data) {
        console.log("enviou mensagem");
        $("#lista_mensagens").append($('<p>').text(data));
    });

    $("#botao").on('click', function() {
        console.log("clicou botao");
        socket.send($('#usuario').val() + ": " + $('#mensagem').val());
        $('#mensagem').val('');
    });
})