import './App.css';
import { Route, Switch } from 'react-router-dom';
import LayoutComponent from '../src/components/layout/index'
import Login from './components/screens/login/Login'

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
    </div>
  );
}

export default App;
