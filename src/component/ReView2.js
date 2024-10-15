import { useState } from "react";

// 기본 구조
function App(){
    const [count, setCount] = useState(0); // [0, 함수]
    
    var cnt = 0;
    return(<>
        <div>{count}</div>
        <button onClick={()=>{
            setCount(prev => prev + 1)
        }}>증가!</button>
        <button onClick={()=>{
            setCount(prev => prev - 1)
        }}>감소!</button>

    
    </>);
}


export default App;