import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const headingStyle = {
  color: 'wheat',
  backgroundColor: 'black',
};


function Header({ title }) {
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button
        title="Add"
        color="green"
      />
    </header>
  );
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
