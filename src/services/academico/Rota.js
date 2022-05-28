class RotaService {
    getAll(){
        const rota = localStorage.getItem('rota')
        return rota ? JSON.parse(rota) : []
    }

    get(id){
        const rota = this.getAll()
        return rota[id]
    }

    create(dados){
        const rota = this.getAll()
        rota.push(dados)
        localStorage.setItem('rota', JSON.stringify(rota))
    }

    update(id, dados){
        const rota = this.getAll()
        rota.splice(id, 1, dados)
        localStorage.setItem('rota', JSON.stringify(rota))
    }

    delete(id){
        const rota = this.getAll()
        rota.splice(id, 1)
        localStorage.setItem('rota', JSON.stringify(rota))
    }
}

export default new RotaService()