class TuristicoService {
    getAll(){
        const turistico = localStorage.getItem('turistico')
        return turistico ? JSON.parse(turistico) : []
    }

    get(id){
        const turistico = this.getAll()
        return turistico[id]
    }

    create(dados){
        const turistico = this.getAll()
        turistico.push(dados)
        localStorage.setItem('turistico', JSON.stringify(turistico))
    }

    update(id, dados){
        const turistico = this.getAll()
        turistico.splice(id, 1, dados)
        localStorage.setItem('turistico', JSON.stringify(turistico))
    }

    delete(id){
        const turistico = this.getAll()
        turistico.splice(id, 1)
        localStorage.setItem('turistico', JSON.stringify(turistico))
    }
}

export default new TuristicoService()