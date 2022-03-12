import './App.css';
import { Route, Switch } from 'react-router-dom';
import LayoutComponent from '../src/components/layout/index'
import Login from './components/screens/login/Login'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
            <Login/>
          </Route>
          <Route path='/dashboard'>
            <LayoutComponent/>
          </Route>
      </Switch>
      <ToastContainer/>
    </div>
  );
}

export default App;
