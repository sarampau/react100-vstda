import React from 'react';
import Todos from './todos';

const Output = (props) => {
  const todos = props.todos;
  return (
    <div className='output'>
      <div className='output-header'>
        <p>View Todos</p>
      </div>
      { todos.length === 0 ?
        <div className='view-todos'>
          <p style={ { fontWeight: 'bold' } }>Welcome to Very Simple Todo App!</p>
          <p>Get started now by adding a new todo on the left.</p>
        </div>
      :
        <Todos
          todos={ props.todos }
          handleCheckbox={ props.handleCheckbox }
          handleEdit={ props.handleEdit }
          handleEditTodo={ props.handleEditTodo }
          handleEditPriority={ props.handleEditPriority }
          handleOnClickEdit={ props.handleOnClickEdit }
          handleDelete={ props.handleDelete }
        />
      }
    </div>
  );
};

Output.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object),
  handleCheckbox: React.PropTypes.func,
  handleEdit: React.PropTypes.func,
  handleEditTodo: React.PropTypes.func,
  handleEditPriority: React.PropTypes.func,
  handleOnClickEdit: React.PropTypes.func,
  handleDelete: React.PropTypes.func
};

export default Output;
