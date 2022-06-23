import Menu from "../menu/menu";
import Tasks from "../tasks/tasks";
import Form from "../form/form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {AuthorizationStatus} from '../../store/reducer'

function Main() {
  const auth = useSelector((state) => state.authorizationStatus);
  const isAuth =
    auth === AuthorizationStatus.Auth ? (
      ""
    ) : (
      <Link
        to={"/login"}
        className="header__nav-link  header__nav-link--profile"
      >
        <span className="header__login">Sign in</span>
      </Link>
    );

  return (
    <>
      {isAuth}
      <Menu />
      <Tasks />
      <Form />
    </>
  );
}

export default Main;
