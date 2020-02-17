import React from 'react';
// import Hello from './sayHello';
import Tweet from "./Tweet";


// const counter = 0;

function App() {
  return(
    <div className="app">
      <Tweet name="Dev Ed" message="Lorem ipsum" likes="221"/>
      <Tweet name="Derp" message="Tweet content" likes="63"/>
      <Tweet name="Waka" message="Here is some sample text" likes="54"/>
      <Tweet name="Pwep" message="DERP DERP DERP DERP DERP" likes="13"/>
    </div>
  );
}

export default App;

//
// function AppB() {
//   return(
//     <div>
//       <h3>This is the subtitle</h3>
//       <button>Test</button>
//     </div>
//   );
// }

// // export default AppB;
