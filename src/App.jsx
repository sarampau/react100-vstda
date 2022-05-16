import React, { Component } from 'react';
import Input from './components/input';
import Output from './components/output';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      priority: '',
      editTodo: '',
      editPriority: '',
      todos: []

    };
    this.handleTodoText = this.handleTodoText.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.handleEditPriority = this.handleEditPriority.bind(this);
    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleTodoText(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handlePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  handleOnClick() {
    const todos = this.state.todos;
    const priority = this.state.priority;
    const todo = this.state.todo;
    const id = Date.now();
    const isChecked = false;
    const isEditing = false;
    const obj = {
      todo,
      priority,
      id,
      isChecked,
      isEditing
    };
    if (todos === '') {
      alert('Must add a todo');
    }
    if (priority === '') {
      alert('Must select a priority');
    } else {
      todos.push(obj);
      this.setState({
        todos,
        todo: '',
        priority: ''
      });
    }
  }

  handleCheckbox(id) {
    const todos = this.state.todos;
    const i = todos.findIndex(obj => obj.id === id);
    todos[i].isChecked = !todos[i].isChecked;
    this.setState({
      todos
    });
  }

  handleEdit(id) {
    const todos = this.state.todos;
    const i = todos.findIndex(obj => obj.id === id);
    todos[i].isEditing = !todos[i].isEditing;
    const editTodo = todos[i].todo;
    const editPriority = todos[i].priority;
    this.setState({
      todos,
      editTodo,
      editPriority
    });
  }

  handleEditTodo(e) {
    let editTodo = this.state.editTodo;
    editTodo = e.target.value;
    this.setState({
      editTodo
    });
  }

  handleEditPriority(e) {
    let editPriority = this.state.priority;
    editPriority = e.target.value;
    this.setState({
      editPriority
    });
  }

  handleOnClickEdit(id) {
    const todos = this.state.todos;
    const editTodo = this.state.editTodo;
    const editPriority = this.state.editPriority;
    const i = todos.findIndex(obj => obj.id === id);
    todos[i].todo = editTodo;
    todos[i].priority = editPriority;
    todos[i].isEditing = !todos[i].isEditing;
    this.setState({
      todos,
      editTodo: '',
      editPriority: ''
    });
  }

  handleDelete(id) {
    const todos = this.state.todos;
    const i = todos.findIndex(obj => obj.id === id);
    todos.splice(i, 1);
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Very Simple Todo App</h1>
        <p className='p-header'>Track all of the things</p>
        <hr />
        <div className='box'>
          <Input
            todo={ this.state.todo }
            priority={ this.state.priority }
            handleTodoText={ this.handleTodoText }
            handlePriority={ this.handlePriority }
            handleOnClick={ this.handleOnClick }
          />
          <Output
            todos={ this.state.todos }
            handleCheckbox={ this.handleCheckbox }
            handleEdit={ this.handleEdit }
            handleEditTodo={ this.handleEditTodo }
            handleEditPriority={ this.handleEditPriority }
            handleOnClickEdit={ this.handleOnClickEdit }
            handleDelete={ this.handleDelete }
          />
        </div>
      </div>
    );
  }
}

export default App;
