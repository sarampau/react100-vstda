import React, { Component } from 'react';
import Input from './components/input';
import Output from './components/output';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: '',
      priority: '',
      todos: [],
      isChecked: false

    };
    this.handleNewTodoText = this.handleNewTodoText.bind(this);
    this.handleNewPriority = this.handleNewPriority.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleNewTodoText(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  handleNewPriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  handleOnClick() {
    const todos = this.state.todos;
    const priority = this.state.priority;
    const newTodo = this.state.newTodo;
    todos.push([newTodo, priority]);
    this.setState({
      todos,
      newTodo: '',
      priority: ''
    });
  }

  handleCheckbox() {
    this.setState({
      isChecked: !this.state.isChecked
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
            handleNewTodoText={ this.handleNewTodoText }
            handleNewPriority={ this.handleNewPriority }
            handleOnClick={ this.handleOnClick }
          />
          <Output
            todos={ this.state.todos }
            isChecked={ this.state.isChecked }
            handleCheckbox={ this.handleCheckbox }
          />
        </div>
      </div>
    );
  }
}

export default App;
