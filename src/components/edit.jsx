import React from 'react';

const Edit = (props) => {
  const todo = props.todo;
  return (
    <div className={ todo.priority === '1' ? 'low-edit' : todo.priority === '2' ? 'medium-edit' : 'high-edit' } key={ todo.id }>
      <p className='p-edit'>Description</p>
      <textarea
        className='update-todo-text'
        onChange={ e => props.handleEditTodo(e) }
      >
        {todo.todo}
      </textarea>
      <p className='p-edit'>Priority</p>
      <select
        className='update-todo-priority'
        onChange={ e => props.handleEditPriority(e) }
      >
        <option value={ todo.priority } defaultValue>Select a Priority</option>
        <option value='1'>Low</option>
        <option value='2'>Medium</option>
        <option value='3'>High</option>
      </select>
      <button
        className='update-todo'
        id={ todo.priority === '1' ? 'low-edit-button' : todo.priority === '2' ? 'medium-edit-button' : 'high-edit-button' }
        onClick={ () => props.handleOnClickEdit(todo.id) }
      >
        Save
      </button>
    </div>
  );
};

Edit.propTypes = {
  todo: React.PropTypes.string,
  handleEditTodo: React.PropTypes.func,
  handleEditPriority: React.PropTypes.func,
  handleOnClickEdit: React.PropTypes.func
};

export default Edit;
