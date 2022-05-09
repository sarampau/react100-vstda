import React from 'react';

const Todos = (props) => {
  const todos = props.todos;
  return (
    <div>
      {
        todos.map(todo => (
          <div className={ `${todo[1]}` }>
            <input type='checkbox' onClick={ () => props.handleCheckbox() } />
            <p className={ props.isChecked ? 'p-linethrough' : 'p' }>{todo[0]}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Todos;
