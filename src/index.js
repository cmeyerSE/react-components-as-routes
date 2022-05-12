import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Messages = () => <h1>Messages go here!</h1>

const Signup = () => {
  return (
  <div>
    <form>
      <div>
        <input type="text" name="username" placeholder='Username' />
        <label htmlFor='username'>Username</label>
      </div>
      <div>
        <input type="password" name='password' placeholder='Password' />
        <label htmlFor='password'>Password</label>
      </div>
      <div>
        <input type='email' name='email' placeholder='Email' />
        <label htmlFor='email'>Email</label>
      </div>
    </form>
  </div>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>,
  document.getElementById('root')
);
