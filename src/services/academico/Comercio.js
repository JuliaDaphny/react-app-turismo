class LocaisService {
    getAll(){
        const comercio = localStorage.getItem('comercio')
        return comercio ? JSON.parse(comercio) : []
    }

    get(id){
        const comercio = this.getAll()
        return comercio[id]
    }

    create(dados){
        const comercio = this.getAll()
        comercio.push(dados)
        localStorage.setItem('comercio', JSON.stringify(comercio))
    }

    update(id, dados){
        const comercio = this.getAll()
        comercio.splice(id, 1, dados)
        localStorage.setItem('comercio', JSON.stringify(comercio))
    }

    delete(id){
        const comercio = this.getAll()
        comercio.splice(id, 1)
        localStorage.setItem('comercio', JSON.stringify(comercio))
    }
}

export default new LocaisService()