import React, { Component } from 'react'
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';


import TodoService from '../service/todoService'

let todoService =  new TodoService();


export default class Todo extends Component {
    constructor(props) {
        super(props)       
        this.state = {
            description: '',
            list: todoService.listarTodos()
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
    }

    refresh(description='') {
        this.setState({...this.state, description,  list: todoService.pesquisar(description)})
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        todoService.inserir(this.state.description)  
        this.refresh();      
    }

    handleSearch() {
       this.refresh(this.state.description)
    }

    handleClear() {  
        this.refresh();     
    }

    handleRemove(todo) {
        todoService.remover(todo)  
        this.refresh(this.state.description) 
    }

    handleMarkAsDone(todo) {
        todo.done = true; 
        todoService.atualizar(todo)  
        this.refresh(this.state.description) 
    }

    handleMarkAsPending(todo) {
        todo.done = false; 
        todoService.atualizar(todo)  
        this.refresh(this.state.description) 
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleAdd={this.handleAdd} 
                    handleChange={this.handleChange} 
                    description={this.state.description} 
                    handleSearch={this.handleSearch} 
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list} handleRemove={this.handleRemove} 
                handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}