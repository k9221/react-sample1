import { useState } from "react";




function App(){
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const parsedNum = Number(num);
    
    return(<>
        <div>현재카운트 : {count}</div>
        <input value={num} onChange={(e)=>{
            setNum(e.target.value)
            console.log(setNum);
        }}></input>   
        <div>
            <button onClick={()=>{
                setCount(count + parsedNum);
            }}>증가</button>
            <button onClick={()=>{
                if (count - parsedNum >= 0) { 
                    setCount(count - parsedNum);
                }
            }}>감소</button>
              <button onClick={()=>{
                setCount(0);
            }}>초기화</button>
        </div>

    </>);
}



export default App;