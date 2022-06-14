const comercioV = {
    nome: {
        required: "Campo obrigatório!",
        maxLength: {value: 15, message: "Muitos caracteres"},
    },

    cidade: {
        required: "Campo obrigatório!",
        minLength: {value: 5, message: "Digite um pouco mais."},
        maxLength: {value: 15, message: "Muitos caracteres"},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
    },
    
    pais: {
        required: "Campo obrigatório!", 
        minLength: {value:5, message: "Digite um pouco mais."},
        min: {value: 5, message: "O valor mínimo é de 5 caracteres"},
        maxLength: {value: 10, message: "Muitos caracteres"},
    },

    localizacao: {
        required: "Campo obrigatório!",
    },

    informacao: {
        maxLength: {value: 100, message: "Muitos caracteres"},
    },
}

export default comercioV