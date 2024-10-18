import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Header() {
  const {user, login, logout} = useContext(UserContext);
  

  return (
    <header className="header">
      <h1>{user ? '환영합니다!' : '환영합니다!'}</h1>
      {user && <p> Hello, {user.name} - {user.email}</p>}
      <button onClick= {user ? logout : login}>
        {user ? '로그아웃' : '로그인'}
      </button>
    </header>
  );
}

export default Header;
