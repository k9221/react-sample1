import React, { useReducer} from 'react';

const reducer = (state, action) => {
    if(action.type == "찬성"){
        return {...state, yes: state.yes + 1}
    } else if(action.type == "반대"){
        return {...state, no: state.no + 1}
    } else if(action.type == "초기화"){
        return {yes: 0, no: 0}
    }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {yes:0, no:0});
 
  return (
    <div className="app">
        <h1>투표 시스템</h1>
        <div>찬성: {state.yes}</div>
        <div>반대: {state.no}</div>
        <div>
            <button onClick={()=>{
                dispatch({type : "찬성"});
            }}>찬성</button>

            <button onClick={()=>{
                dispatch({type : "반대"});
            }}>반대</button>
             
             <button onClick={()=>{
                dispatch({type : "초기화"});
            }}>초기화</button>

        </div>
    </div>
  );
}  


export default App;

// createContext() context 를 생성
// useContext() context 를 사용
