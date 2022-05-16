import React from 'react';
import Edit from './edit';

const Todos = (props) => {
  const todos = props.todos;
  return (
    <div>
      {
        todos.map(todo => (
          todo.isEditing === false ?
            <li
              className={ todo.priority === '1' ? 'success' : todo.priority === '2' ? 'warning' : 'danger' }
              key={ todo.id }
            >
              <input
                type='checkbox'
                checked={ todo.isChecked }
                onClick={ () => props.handleCheckbox(todo.id) }
              />
              <p className={ todo.isChecked ? 'p-linethrough' : 'p' }>{todo.todo}</p>
              <button
                type='button'
                className='edit-todo'
                onClick={ () => props.handleEdit(todo.id, todo.todo) }
              >
                <span className='glyphicon glyphicon-edit' />
              </button>
              <button
                type='button'
                className='delete-todo'
                onClick={ () => props.handleDelete(todo.id) }
              >
                <span className='glyphicon glyphicon-trash' />
              </button>
            </li>
          :
            <Edit
              todo={ todo }
              handleEditTodo={ props.handleEditTodo }
              handleEditPriority={ props.handleEditPriority }
              handleOnClickEdit={ props.handleOnClickEdit }
            />
        ))
      }
    </div>
  );
};

Todos.propTypes = {
  todos: React.PropTypes.arrayOf,
  handleOnClickEdit: React.PropTypes.func
};

export default Todos;
