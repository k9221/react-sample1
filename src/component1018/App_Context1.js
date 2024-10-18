import { createContext, useContext, useState } from "react"

const DateContext = createContext();


function Sub1(){
    return <>
      <Sub2></Sub2>
    </>
  }
  function Sub2(){
    return <>
      <Sub3></Sub3>
    </>
  }
  function Sub3(){
    const {name} = useContext(DateContext);
    return <>
    <div>name : {name}</div>
      <Sub4></Sub4>
    </>
  }
  function Sub4(){
    return <>
      <Sub5></Sub5>
    </>
  }
  function Sub5(){
    return <>
      <Sub6></Sub6>
    </>
  }
  function Sub6(){
    const {count} = useContext(DateContext);
    return <>
        <div>count : {count}</div>
      <Sub7></Sub7>
    </>
  }
  function Sub7(){
    return <>
        <div></div>
    </>
  }
  
  
  function App() {
    const [count, setCount] = useState(100);
    const [name, setName] = useState("홍길동");
    return (
      <>
        <DateContext.Provider value={{count, name}}>
            <Sub1></Sub1>
        </DateContext.Provider>
      </>
    );
  }
  
  export default App;