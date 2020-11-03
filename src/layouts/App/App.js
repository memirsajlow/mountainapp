
import './App.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Home from "../Home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Wyprawy from '../Wyprawy/Wyprawy';
import More from "../More/More";

function App() {
  return (
 
  <Router>

    <Header/>
    <Switch>
      <Route path="/" exact>
        <Home/> 
        <Footer/>
      </Route>
      <Route path="/wyprawy">
        <Wyprawy/> 
      </Route>
      <Route path="/more">
        <More/> 
        
      </Route>
    </Switch>
    
   
    </Router>
  );
}

export default App;
