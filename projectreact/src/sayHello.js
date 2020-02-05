import React from 'react';

const sayHello = () => {
  console.log('Hello');
};

function Hello(){
  return(
    <div>
    <h1>This is the sayHello component.</h1>
    <button onClick={sayHello}>Hello</button>
    </div>
  )
}

export default Hello;
