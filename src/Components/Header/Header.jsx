import React from 'react';
import MainHeader from './Header.style';


const Header = (props) => {
  return (
  <MainHeader component="header">
      {props.children}
  </MainHeader>
  );
}

export default Header;