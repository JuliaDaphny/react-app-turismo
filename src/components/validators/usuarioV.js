const usuarioV = {
    nome: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 30, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },

    funcao: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 10, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },

    login:{
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 10, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },

    senha:{
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 10, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },

}

export default usuarioV