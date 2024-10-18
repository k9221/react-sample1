// 절대 절대 앞에꺼 보지말고!!!!

import { useState } from "react";

// 기본 구조
function App(){
    const [count, setCount] = useState(0);

    return(<>
        <div>현재 갯수 : {count}</div>
        <button onClick={()=>{
            setCount(prev => prev + 1)
        }}>증가</button>
          <button onClick={()=>{
            setCount(prev => prev - 1)
        }}>감소</button>
        <button onClick={()=>{
            setCount(0)
        }}>초기화</button>
    </>);
}

export default App;