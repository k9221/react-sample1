import React, { useState } from 'react';
import Page from './component1018/Page2';

function App() {
  const [number, dispatch] = useState("Dark");
  const style = {color : 'white', backgroundColor : 'black'};

  return (
      <div style={style}>
        <div>{number}</div>
        <button onClick={()=>{
          dispatch({style : style, number : 1});
        }}></button>
      </div>
  );
}

export default App;