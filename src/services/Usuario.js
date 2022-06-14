class RotaService {
    getAll() {
        const usuario = localStorage.getItem('usuario')
        return usuario ? JSON.parse(usuario) : []
    }

    get(id) {
        const usuario = this.getAll()
        return usuario[id]
    }

    create(dados) {
        const usuario = this.getAll()
        usuario.push(dados)
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }

    update(id, dados) {
        const usuario = this.getAll()
        usuario.splice(id, 1, dados)
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }

    delete(id) {
        const usuario = this.getAll()
        usuario.splice(id, 1)
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }

    getByLoginSenha(email, senha) {
        const usarioList = this.getAll()

        let usuarioRetorno = undefined

        for (const i in usarioList) {
            const usario = usarioList[i]
            if (usario.email === email && usario.senha === senha) {
                usuarioRetorno = usario
            }
        }

        return usuarioRetorno
    }

    setAutenticado(usuario) {
        if (usuario !== undefined) {
            localStorage.setItem('usuario_autenticado', usuario.id)
        } else {
            localStorage.setItem('usuario_autenticado', null)
        }
    }

    getAutenticado() {
        const usuarioAutenticado = localStorage.getItem('usuario_autenticado')
        const usuario = this.getAll()
        return typeof usuario[usuarioAutenticado] != 'undefined'
            ? usuario[usuarioAutenticado]
            : null
    }
}

export default new RotaService()
