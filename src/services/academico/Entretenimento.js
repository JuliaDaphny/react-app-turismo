class EventoService {
    getAll(){
        const Entretenimento = localStorage.getItem('Entretenimento')
        return Entretenimento ? JSON.parse(Entretenimento) : []
    }

    get(id){
        const Entretenimento = this.getAll()
        return Entretenimento[id]
    }

    create(dados){
        const Entretenimento = this.getAll()
        Entretenimento.push(dados)
        localStorage.setItem('Entretenimento', JSON.stringify(Entretenimento))
    }

    update(id, dados){
        const Entretenimento = this.getAll()
        Entretenimento.splice(id, 1, dados)
        localStorage.setItem('Entretenimento', JSON.stringify(Entretenimento))
    }

    delete(id){
        const Entretenimento = this.getAll()
        Entretenimento.splice(id, 1)
        localStorage.setItem('Entretenimento', JSON.stringify(Entretenimento))
    }
}

export default new EventoService()