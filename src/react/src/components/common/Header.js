import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  const activeStyle = { color: 'blue' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Landing</NavLink>
      {" | "}
      <NavLink to="/home" activeStyle={activeStyle} exact>Home</NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
      {" | "}
      <NavLink to="/sampleproducts" activeStyle={activeStyle}>Sample Products</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
