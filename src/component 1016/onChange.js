import { useState } from "react";

// 기본 구조
function App(){
    const [text, setText] = useState("");
    const inputText = (e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }
    return(<>
        <input value={text} onChange={inputText}></input>
        <button>클릭</button>
        <div>{text}</div>
    
    </>);
}

export default App;