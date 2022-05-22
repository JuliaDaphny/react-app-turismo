class CidadeService {

    getAll(){
        const cidade = localStorage.getItem('cidade')
        return (cidade) ? (JSON.parse(cidade)) : ([])
    }

    get(id){
        const cidade = this.getAll()
        return cidade[id]
    }

    create(dados){
        const cidade = this.getAll()
        cidade.push(dados)
        localStorage.setItem('cidade', JSON.stringify(cidade))
    }

    update(id, dados){
        const cidade = this.getAll()
        cidade.splice(id, 1, dados)
        localStorage.setItem('cidade', JSON.stringify(cidade))
    }

    delete(id){
        const cidade = this.getAll()
        cidade.splice(id, 1)
        localStorage.setItem('cidade', JSON.stringify(cidade))
    }

}

export default new CidadeService()