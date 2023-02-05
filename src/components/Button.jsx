import React from 'react';
import PropTypes from 'prop-types';


function Button({ title, color, onClick }) {
  return (
    <button onClick={onClick} className="btn" type="button" style={{ backgroundColor: color }}>{title}</button>
  );
}


Button.defaultProps = {
  btnColor: 'steelblue',
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};


export default Button;
