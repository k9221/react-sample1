import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Footer() {
  const {user, login} = useContext(UserContext);
  return (
    <footer className="footer">
      {user ? <p>2024 MY Website ~</p> : <p></p>}
    </footer>
  );
}

export default Footer;
