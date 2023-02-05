import React from 'react';
import { FaTimes } from 'react-icons/fa';
// import PropTypes from 'prop-types';


function Task({ task }) {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes style={{ cursor: 'pointer' }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}


export default Task;


