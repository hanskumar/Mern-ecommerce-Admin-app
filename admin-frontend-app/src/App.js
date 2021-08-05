import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/"  exact component={Home}></Route>
            <Route path="/login"  component={Login}></Route>
            <Route path="/register"  component={Register}></Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
