// import PropTypes from 'prop-types';
import Task from './Task';

function Tasks({ tasks }) {
  return (
    <>
      { tasks.map((task) => (
        <Task key={task.id} task={task} />
      )) }
    </>
  );
}


Tasks.defaultProps = {
};

Tasks.propTypes = {
};


export default Tasks;


