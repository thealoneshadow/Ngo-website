import './App.css';
import Home from "./components/pages/Home";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route}  from "react-router-dom";
import HeroSection from './components/HeroSection';
import Signup from "./components/pages/Signup";
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Signup />
      <Switch>
      <Route path='/' exact component={Home}  />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
