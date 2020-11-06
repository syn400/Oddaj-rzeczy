import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './components/Home.js'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
