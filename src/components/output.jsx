import React from 'react';

const Output = (props) => {
  return (
    <div className='output'>
      <div className='output-header'>View Todos</div>
      <div className='view-todos'>
        <p style={ { fontWeight: 'bold' } }>Welcome to Very Simple Todo App!</p>
        <p>Get started now by adding a new todo on the left.</p>
      </div>
    </div>
  );
};

export default Output;
