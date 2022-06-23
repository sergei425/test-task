import "./App.css";
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import SingIn from "./components/sing-in/sing-in";
import Main from "./components/main/main";
import Task from './components/task/task';
import browserHistory from './browser-history';

function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={'/'} element={<Main/>} />
        <Route path={'/task'} element={<Task/>}/>
        <Route path={'/login'} element={<SingIn />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
