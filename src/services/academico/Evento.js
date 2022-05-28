class EventoService {
    getAll(){
        const evento = localStorage.getItem('evento')
        return evento ? JSON.parse(evento) : []
    }

    get(id){
        const evento = this.getAll()
        return evento[id]
    }

    create(dados){
        const evento = this.getAll()
        evento.push(dados)
        localStorage.setItem('evento', JSON.stringify(evento))
    }

    update(id, dados){
        const evento = this.getAll()
        evento.splice(id, 1, dados)
        localStorage.setItem('evento', JSON.stringify(evento))
    }

    delete(id){
        const evento = this.getAll()
        evento.splice(id, 1)
        localStorage.setItem('evento', JSON.stringify(evento))
    }
}

export default new EventoService()