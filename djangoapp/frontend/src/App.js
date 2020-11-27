import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Customer from './components/Customer';
import OrderForm from './components/OrderForm';
import ProductForm from './components/ProductForm';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div class="inner">
          <Route path="/" exact component={Dashboard} />
          <Route path="/products" component={Products} />
          <Route path="/customer/:id" component={Customer} />
          <Route path="/orderform" component={OrderForm} />
          <Route path="/productform" component={ProductForm} />
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
