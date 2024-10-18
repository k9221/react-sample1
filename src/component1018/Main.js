import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Main() {
  const {user} = useContext(UserContext);
  return (
    <main className="main">
      {user ? (
        <p>환영합니다! {user.name}님! 로그인 됨</p>
      ) : (
        <p>로그인해주세요</p>
      )}
    </main>
  );
}

export default Main;
