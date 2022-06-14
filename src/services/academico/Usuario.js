class RotaService {
    getAll(){
        const usuario = localStorage.getItem('usuario')
        return usuario ? JSON.parse(usuario) : []
    }

    get(id){
        const usuario = this.getAll()
        return usuario[id]
    }

    create(dados){
        const usuario = this.getAll()
        usuario.push(dados)
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }

    update(id, dados){
        const usuario = this.getAll()
        usuario.splice(id, 1, dados)
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }

    delete(id){
        const usuario = this.getAll()
        usuario.splice(id, 1)
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }

    getByLoginSenha(login, senha){
        const userList = this.getAll()
        return userList.filter(function(user){
            return user.login === login && user.senha === senha
        })[0]
    }

    setAutenticado(usuario){
        localStorage.setItem('usuario_autenticado', usuario.id)
    }

    getAutenticado(){
        const usuarioAutenticado = localStorage.getItem('usuario_autenticado')
        const usuario = this.getAll()
        return typeof usuario[usuarioAutenticado] != "undefined" ? usuario[usuarioAutenticado] : null
    }
}

export default new RotaService()