import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home } from './components/Home.js'
import { Login } from './components/Login.js'
import { Register } from './components/Register.js';
import { NotFound } from './components/NotFound';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/logowanie' component={Login} />
        <Route exact path='/rejestracja' component={Register} />
        <Route path='' component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
