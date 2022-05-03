import React from 'react';

const Output = (props) => {
  return (
    <div className='output'>
      <div className='output-header'>View Todos</div>
      <div className='welcome' style={ { fontWeight: 'bold' } }>
        <p>Welcome to Very Simple Todo App!</p>
        <p>Get started now by adding a new todo on the left.</p>
      </div>
    </div>
  );
};

export default Output;
