class LocaisService {
    getAll(){
        const locais = localStorage.getItem('locais')
        return locais ? JSON.parse(locais) : []
    }

    get(id){
        const locais = this.getAll()
        return locais[id]
    }

    create(dados){
        const locais = this.getAll()
        locais.push(dados)
        localStorage.setItem('locais', JSON.stringify(locais))
    }

    update(id, dados){
        const locais = this.getAll()
        locais.splice(id, 1, dados)
        localStorage.setItem('locais', JSON.stringify(locais))
    }

    delete(id){
        const locais = this.getAll()
        locais.splice(id, 1)
        localStorage.setItem('locais', JSON.stringify(locais))
    }
}

export default new LocaisService()