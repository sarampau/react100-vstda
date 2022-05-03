import React from 'react';

const Input = (props) => {
  return (
    <div className='input'>
      <div className='input-header'>
        <p>Add New Todo</p>
      </div>
      <textarea className='create-todo-text'>
        
      </textarea>
      <p>How much of a priority is this?</p>
      <select className='create-todo-priority'>
        <option selected disabled hidden>Select a Priority</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      <div className='footer'>
        <button className='button'>Add</button>
      </div>
    </div>
  );
};

export default Input;
