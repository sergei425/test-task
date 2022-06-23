import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./task-item.css";
import {AuthorizationStatus} from '../../store/reducer'

function TaskItem({ task }) {
  const {id, username, email, text, status: statusTask } = task;
  const auth = useSelector((state) => state.authorizationStatus);

  const getId = (id) => {
    
  }

  const isAuth = auth === AuthorizationStatus.Auth ? <Link to={"/task"} onClick={getId(id)}>edit task</Link> : "";

  return (
    
      <div className="card">
        {isAuth}
        <p className="card-item">{username}</p>
        <p className="card-item">{email}</p>
        <p className="card-item">{text}</p>
        <p className="card-item">{statusTask}</p>
      </div>
    
  );
}

export default TaskItem;
