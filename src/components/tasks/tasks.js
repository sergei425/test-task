import { useSelector, useDispatch } from 'react-redux';
import Pogination from '../pogination/pogination';
import TaskList from './../task-list/task-list';
import { tasksFetchPagination } from '../../store/api-action';

function Tasks() {
  const tasks = useSelector((state) => state.tasks);
  const taskCount = useSelector((state) => state.totalTaskCount);
  const pageSize = useSelector((state) => state.pageSize);
  const currentPage = useSelector((state) => state.currentPage);

  const dispatch = useDispatch();

  const onPageChange = (index) => {
      dispatch(tasksFetchPagination(index));
  };


  return (
    <div className="tasks">
      <TaskList tasks={tasks}/>
      <Pogination taskCount={taskCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
}

export default Tasks
