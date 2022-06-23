import TaskItem from './../task-item/task-item';
import './task-list.css'

function TaskList({tasks}) {
  const tasksItem = tasks.map((item) => <TaskItem key={item.id} task={item} />);

  return (
    <div className="task-list">
      {tasksItem}
    </div>
  );
}

export default TaskList;
