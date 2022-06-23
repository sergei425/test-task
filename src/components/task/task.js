import Form from '../form/form';
// import { useSelector } from "react-redux";
// import {AuthorizationStatus} from '../../store/reducer'

function Task() {
  // const auth = useSelector((state) => state.authorizationStatus);
  // const isAuth = auth === AuthorizationStatus.Auth ? <Form title/> : "";

  return ( 
    
      <Form title="edit task" />

    
  );
}

export default Task;