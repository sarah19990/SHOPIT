import React, { useEffect } from 'react'
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductDetails from './product/ProductDetails';
import Login from './components/user/Login'
import Register from './components/user/Register'
import { loadUser } from './actions/userActions'
import store from './store'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ProtectedRoute from './components/route/ProtectedRoute'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
    <div className="App">
      <Header />
      <div className="container container-fluid">
      <Route path= "/" component={Home} exact />
      <Route path="/search/:keyword" component={Home} />
      <Route path= "/product/:id" component={ProductDetails} exact />

      <Route path="/cart" component={Cart} exact />
      <ProtectedRoute path="/shipping" component={Shipping} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/password/forgot" component={ForgotPassword} exact />
      <Route path="/password/reset/:token" component={NewPassword} exact />
      <ProtectedRoute path="/me" component={Profile} exact />
      <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
      <ProtectedRoute path="/password/update" component={UpdatePassword} exact />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
