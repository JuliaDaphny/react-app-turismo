const turisticoV = {
    nome: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 15, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },

    cidade: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 15, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },

    pais: {
        required: "Campo obrigatório!",
    },

    localizacao: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 100, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },
    
    descricao: {
        required: "Campo obrigatório!", 
        minLength: {value: 10, message: "Digite um pouco mais."},
        min: {value: 10, message: "O valor mínimo é de 10 caracteres"},
    },

    informacao: {
        required: "Campo obrigatório!", 
        minLength: {value: 10, message: "Digite um pouco mais."},
        min: {value: 10, message: "O valor mínimo é de 10 caracteres"},
        maxLength: {value: 100, message: "Muitos caracteres"},
    },

}

export default turisticoV