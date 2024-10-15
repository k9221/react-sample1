import { useState } from "react";

function Main() {
    return <div>메인 페이지 입니다!</div>; 
}

function MyPage() {
    return <div>마이 페이지 입니다!</div>; 
}

function App() {
    const [menu, setMenu] = useState(1);

    return (
        <>
            <div>
                <button onClick={() => setMenu(1)}>1번메뉴</button>
                <button onClick={() => setMenu(2)}>2번메뉴</button>
                {menu === 1 ? <Main /> : <MyPage />}
            </div>
        </>
    );
}

export default App;
