import React, { createContext, useState } from 'react';
import Page from './Page';
import { UserContext } from '../context/UserContext';

function App() {
  const [user, setUser] = useState(null); 

  const login = () => {
    setUser({name : '홍길동', email: 'hong@naver.com'});
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div className="app">
      <UserContext.Provider value={{user, login, logout}}>
        <Page/>
      </UserContext.Provider>
    </div>
  );
}

export default App;

// createContext() context 를 생성
// useContext() context 를 사용
