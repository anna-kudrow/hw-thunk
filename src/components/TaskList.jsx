import './TasksList.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/tasksSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';



const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className='tasks-list'>
          {tasks.map((task) => (
            <li className='task-item' key={task.id}>
                <p>{task.title}</p>
                {task.completed 
                    ? <FontAwesomeIcon icon={faSquareCheck}  /> 
                    : <FontAwesomeIcon icon={faHourglass} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TasksList;
