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
          isChecked={ props.isChecked }
          handleCheckbox={ props.handleCheckbox }
        />
      }
    </div>
  );
};

export default Output;
