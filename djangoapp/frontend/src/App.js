import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Customer from './components/Customer';
import OrderForm from './components/OrderForm';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div class="inner">
          <Route path="/" exact component={Dashboard} />
          <Route path="/products" component={Products} />
          <Route path="/customer" component={Customer} />
          <Route path="/orderform" component={OrderForm} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
