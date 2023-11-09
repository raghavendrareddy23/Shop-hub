import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from '../src/Components/Cart/CartContext';
// import HomePage from './Components/Home';
import ProductList from './Components/Products/ProductList';
import ProductDetails from './Components/Products/ProductDetails';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Checkout from './Components/Checkout/Checkout';
// import ProtectedRoute from './Components/Auth/ProtectedRoute';
import { AuthProvider } from './Components/Auth/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </CartProvider>
      </AuthProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;