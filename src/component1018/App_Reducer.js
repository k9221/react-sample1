import React, { useReducer, useRef } from 'react';



const reducer = (prev, action) => {
    if(action.req == "결제"){
       return prev - Number(action.money);
    } else if(action.req == "환불"){
        return prev + Number(action.money);

    }
    
}

function App() {
  const [money, dispatch] = useReducer(reducer, 100000);
  const moneyRef = useRef();
  return (
    <div className="app">
        {money}
        <div><input ref={moneyRef}></input></div>
        <div>
            <button onClick={()=>{
                dispatch({money : moneyRef.current.value, req : "결제"});
            }}>결제</button>

            <button onClick={()=>{
                dispatch({money : moneyRef.current.value, req : "환불"});
            }}>환불</button>
        </div>
    </div>
  );
}

export default App;

// createContext() context 를 생성
// useContext() context 를 사용
