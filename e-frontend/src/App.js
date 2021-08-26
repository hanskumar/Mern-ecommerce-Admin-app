import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage"
import ProductListPage from "./pages/ProductListPage"
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/:productslug/:productId" component={ProductDetailPage} /> 
            <Route path="/:slug" component={ProductListPage} /> 
            
          </Switch>
        </Router>
    </div>
    );
}

export default App;
