import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home } from './components/Home.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { NotFound } from './components/NotFound';
import { AuthProvider } from './Auth';
import { LogOut } from './components/LogOut';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/logowanie' component={Login} />
          <Route exact path='/rejestracja' component={Register} />
          <Route exact path='/wylogowano' component={LogOut} />
          <Route path='' component={NotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
