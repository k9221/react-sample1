function Header(props) {
 
  return (
    <div id="header">
      <div>
        <a href="#" onClick={()=>{
          props.printText();
        }}>{props.title}</a>
        </div>
    </div>
  );
}
// Main, Footer 컴포넌트 생성해서 아래에 부착하기
function Main(props) {
  var list = [];

  props.list.forEach(element => {
    list.push(<li key={element}> {element} </li>);
  });

  return (
    <div id="main">
      <ul>
          {list}  
      </ul>
    </div>
  )
}
function Footer(props) {
  return (
    <div id="footer">
      <div>
        <a href="#" onClick={()=>{
          props.printText(props.message);
        }}>
          {props.message}
        </a>
      </div>

    </div>
  );
}


function App() {
  var subject1 = [ "자바", "자바스크립트", "오라클"];
  var subject2 = [ "html", "css", "리액트", "mysql"]
  return (
    <div>
      <Header title="자바 재밌따!" printText={()=>{
        console.log("함수 보내기 테스트!");
      }}></Header>
      <Header title="오라클 재밌따!"  printText={()=>{
        alert("함수 보내기 테스트222!");
      }}></Header>

      <Main list={subject1}></Main>
      <Main list={subject2}></Main>
      <Footer message="반가워" printText={(text)=>{
        alert(text);
      }}></Footer>
    </div>
  );
}

export default App;
