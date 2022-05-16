import React from 'react';

const Input = (props) => {
  return (
    <div className='input'>
      <div className='input-header'>
        <p>Add New Todo</p>
      </div>
      <div className='input-body'>
        <p>I want to...</p>
        <textarea
          className='create-todo-text'
          onChange={ e => props.handleTodoText(e) }
          value={ props.todo }
        />
        <p>How much of a priority is this?</p>
        <select
          className='create-todo-priority form-control'
          onChange={ e => props.handlePriority(e) }
          value={ props.priority }
        >
          <option value='' defaultValue>Select a Priority</option>
          <option value='1'>Low</option>
          <option value='2'>Medium</option>
          <option value='3'>High</option>
        </select>
      </div>
      <div className='footer'>
        <button className='create-todo' onClick={ () => props.handleOnClick() }>Add</button>
      </div>
    </div>
  );
};

Input.propTypes = {
  todo: React.PropTypes.string,
  priority: React.PropTypes.string,
  handleTodoText: React.PropTypes.func,
  handlePriority: React.PropTypes.func,
  handleOnClick: React.PropTypes.func
};

export default Input;
