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
}

export default new RotaService()