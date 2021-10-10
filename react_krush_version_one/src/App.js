import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from './pages/Services';
import About from './pages/Products';
import Contact from './pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={About} />
          <Route path='/sign-up' exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
