import React, { useContext } from 'react';
import { ColorContext } from '../context/DarkModeContext';

function Main2() {
  const {number} = useContext(ColorContext);
  return (
    <main className="main">
      {number == 1 ? (
        <p>환영합니다! {user.name}님! 로그인 됨</p>
      ) : (
        <p>로그인해주세요</p>
      )}
    </main>
  );
}

export default Main2;
