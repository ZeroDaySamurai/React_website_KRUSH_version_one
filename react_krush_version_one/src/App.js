import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
