import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register';
import PrivateRoute from './components/privateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,getInitialData } from './actions'
import {useEffect } from 'react'
import Product from './pages/product';
import Category from './pages/category';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  /*-----Check user is logged in ------------*/
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }

    if(auth.authenticate){
      console.log("helo");
      dispatch(getInitialData());
    }

  }, [auth.authenticate])


  useEffect(() => {
    dispatch(getInitialData());
  }, [])


  return (
    <div className="App">
      <Router>
          <Switch>
            <PrivateRoute path="/"  exact component={Home} />
            <PrivateRoute path="/products"  component={Product} />
            <PrivateRoute path="/category"  component={Category} />
            <Route path="/login"  component={Login} />
            <Route path="/register"  component={Register} />

          </Switch>
      </Router>
    </div>
  );
}

export default App;
