$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })

    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true 
            },
            aceitoTermos: {
                required: true 
            },
        },

        messages: {
            nome:'<span class="message-error">Por favor, insira seu nome</span>',
            email:'<span class="message-error">Por favor, insira seu e-mail</span>',
            telefone:'<span class="message-error">Por favor, insira seu telefone</span>',
            mensagem: '<span class="message-error">Este campo é obrigatório</span>',
            aceitoTermos:'<span class="message-error">Este campo é obrigatório</span>',
        },
        submitHandler: function(form) {
            swal({
                title:  "Obrigado!",
                text:   "Formulário cadastrado",
                icon:   "success",
            });
            
            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                swal("Atenção", `${camposIncorretos} campo(s) incorreto(s)`, "error");
            }
        }
    })
