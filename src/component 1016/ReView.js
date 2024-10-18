import { useState } from "react";

function Header(props){
    var header = "";
    if(props.select == "kor"){
        header = <div>헤더!!</div>
    } else {
        header = <div>Header!</div>
    }

    return {header}

}
function Body(){

    return  <div>
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
            </div>
}
function Footer(){

    return  <div>푸터부분</div>
}




// 기본 구조
function App(){
    return(<>
        <Header select="kor"></Header>
        <Body></Body>
        <Footer></Footer>
    </>);
}

export default App;