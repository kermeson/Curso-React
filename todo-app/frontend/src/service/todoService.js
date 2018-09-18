
const todoListInitial = [{
    _id: 1,
    description: 'Pagar fatura do cartão',
    done: true
},
{
    _id: 2,
    description: 'Reunião com a equipe às 10:00',
    done: false
},
{
    _id: 3,
    description: 'Consulta médicas na terça depois do almoço',
    done: false
}]

export default class {
    constructor() {
        this._todos = [].concat(todoListInitial)
        this._lastId = 4;
    }

    listarTodos() {
        return [].concat(this._todos)
    }

    inserir(description) {
        let newTodo = {
            _id: this._lastId,
            description: description,
            done: false
        }
        this._todos.push(newTodo);
        this._lastId += 1
    }

    remover(todo) {
        this._todos = this._todos.filter(todo1 => (todo1._id != todo._id))
    }

    atualizar(todo) {
        let index = this._todos.findIndex(todo1 => (todo1._id == todo._id))
        this._todos[index] = todo

    }

    pesquisar(query) {
        if (query != '') {
            return this._todos.filter(todo => (todo.description.indexOf(query) != -1))
        } else {
            return this.listarTodos()
        }
        
    }
}