import {useRef} from 'react';
import { useDispatch} from 'react-redux';
import { authorizationAction } from '../../store/api-action';

// import { Link } from 'react-router-dom';
// import { initialStateType } from '../../store/reducer';
// import { getCityAction } from '../../store/action';

function SingIn() {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch =  useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      console.log(passwordRef.current.value, loginRef.current.value);

      const authData = {
        login: loginRef.current.value,
        password: passwordRef.current.value,
      };
      dispatch(authorizationAction(authData));

      loginRef.current.value = '';
      passwordRef.current.value = '';
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" onSubmit={handleSubmit} method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Login</label>
              <input className="login__input form__input" type="text" name="login" placeholder="Login" ref={loginRef} required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password"  ref={passwordRef} required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default SingIn;
