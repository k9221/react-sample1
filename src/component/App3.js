import { useState } from "react";

function App(){
    const [count, setCount] = useState(0);
    //const count = useState(0);
    //const _count = count[0];
    //const _setCount = count[1];  
    // 같은 의미

    return(<>
        <div>현재숫자 : {count}</div>
        <div>
            <button onClick={()=>{
                setCount(count + 1);
            }}>+</button>
            <button onClick={()=>{
                setCount(count - 1);
            }}>-</button>
        </div>

    </>);
}






// function App(){
//     var cnt = 0;
//     const count = useState(9999);
//     var _count = count[0];
//     var _setCount = count[1];  
//     return(<>
//         <div>현재숫자 : {_count}</div>
//         <div>
//             <button onClick={()=>{
//                 _setCount(_count + 1);
//             }}>+</button>
//              <button onClick={()=>{
//                 _setCount(_count - 1);
//             }}>-</button>
//         </div>

//     </>);
// }

export default App;