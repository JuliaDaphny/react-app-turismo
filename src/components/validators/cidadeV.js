const cidadeV = {
    nome: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 15, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },

    localizacao: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 200, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },
    
    descricao: {
        required: "Campo obrigatório!", 
        minLength: {value: 10, message: "Digite um pouco mais."},
        min: {value: 10, message: "O valor mínimo é de 10 caracteres"},
    },

    lingua: {
        required: "Campo obrigatório!",
        maxLength: {value: 15, message: "Muitos caracteres"},
    },

    territorio: {
        required: "Campo obrigatório!",
    },
}

export default cidadeV