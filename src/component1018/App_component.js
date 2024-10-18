import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Test1 from '../component1017/Test1';
import UseEffect from '../component1017/UseEffect1';
import UseRef from '../component1017/UseRef1';
import UseRef2 from '../component1017/UseRef2';

const App = () => {
  return (
    <>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">page컴포넌트</Link></li>
                    <li><Link to="/UseEffect">useEffect컴포넌트</Link></li>
                    <li><Link to="/UseMemo">useMemo컴포넌트</Link></li>
                    <li><Link to="/UseRef">useRef컴포넌트</Link></li>
                   
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Test1></Test1>}></Route>
                <Route path="/UseEffect" element={<UseEffect></UseEffect>}></Route>
                <Route path="/UseMemo" element={<UseRef2></UseRef2>}></Route>
                <Route path="/UseRef" element={<UseRef></UseRef>}></Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;

