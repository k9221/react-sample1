import { useState } from "react";

// 기본 구조
function App(){

    const [text, setTest] = useState("");
    return(<>
        <input value={text} onChange={(e)=>{
            setTest(e.target.value);
        }}></input>
         <div>{text}</div>

    </>);
}

export default App;
