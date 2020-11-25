
import './App.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
import MapContainer from "../../layouts/Mapa/Mapa";

import Kontakt from "../../layouts/Kontakt/Kontakt";
import About from "../../layouts/About/About";
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
        <Route path="/about">
        <About/> 
      </Route>
        <Route path="/kontakt">
        <Kontakt/> 
      </Route>
        <Route path="/mapa">
        <MapContainer/> 
      </Route>
      
    </Switch>
    
   
    </Router>
  );
}

export default App;
