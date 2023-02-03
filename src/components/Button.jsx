import React from 'react';
import PropTypes from 'prop-types';

function Button({ title, color }) {
  const clickBtn = () => {
    console.log('click');
  };

  return (
    <button onClick={clickBtn} className="btn" type="button" style={{ backgroundColor: color }}>{title}</button>
  );
}

Button.defaultProps = {
  btnColor: 'steelblue',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default Button;
