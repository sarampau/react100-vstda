import React from 'react';

const Input = (props) => {
  return (
    <div className='input'>
      <div className='input-header'>
        <p>Add New Todo</p>
      </div>
      <div className='input-body'>
        <p>I want to...</p>
        <textarea className='create-todo-text' onChange={ e => props.handleNewTodoText(e) } />
        <p>How much of a priority is this?</p>
        <select className='create-todo-priority' onChange={ e => props.handleNewPriority(e) }>
          <option selected disabled hidden>Select a Priority</option>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </div>
      <div className='footer'>
        <button className='button' onClick={ () => props.handleOnClick() }>Add</button>
      </div>
    </div>
  );
};

export default Input;
