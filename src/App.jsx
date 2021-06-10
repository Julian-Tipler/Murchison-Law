import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AboutUs from "./components/AboutUs/AboutUs";
import Attorneys from './components/Attorneys/Attorneys'
import Careers from './components/Careers/Careers'
import PracticeIndustries from './components/PracticeIndustries/PracticeIndustries'
import Results from './components/Results/Results'
import NewsCenter from './components/NewsCenter/NewsCenter'
import Locations from './components/Locations/Locations'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/Attorneys" component={Attorneys} />
        <Route exact path="/Practice&Industries" component={PracticeIndustries} />
        <Route exact path="/Results" component={Results} />
        <Route exact path="/NewsCenter" component={NewsCenter} />
        <Route exact path="/Careers" component={Careers} />
        <Route exact path="/Locations" component={Locations} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
