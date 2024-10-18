import React, { useContext } from 'react';
import { ColorContext } from '../context/DarkModeContext';
import { Style } from '@mui/icons-material';

function Header2() {
  const {} = useContext(UserContext);
  

  return (
    <header className="header">
      <h1>{number = 1 ?  'context 실습': 'context 실습'}</h1>
      <button onClick= {number == 1 ? 1 : 2}>
        {number = 1 ? 'right' : 'dark'}
      </button>
    </header>
  );
}

export default Header2;
