import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home } from './components/Home.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { NotFound } from './components/NotFound';
import { AuthProvider } from './Auth';
import { LogOut } from './components/LogOut';
import { PrivateRoute } from './components/PrivateRoute';
import { Form } from './components/Form';
import { SiteUnderConstr } from './components/SiteUnderConstr';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/logowanie' component={Login} />
          <Route exact path='/rejestracja' component={Register} />
          <Route exact path='/wylogowano' component={LogOut} />
          <PrivateRoute exact path='/oddaj-rzeczy' component={Form} />
          <PrivateRoute exact path='/zorganizuj-zbiórkę' component={SiteUnderConstr} />
          <Route path='' component={NotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
