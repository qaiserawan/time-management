import './App.css';
import LogIn from './Pages/Login/Login';
import Home from './Pages/User/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ManagerHome from './Pages/Manager/ManagerHome/ManagerHome';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import UserLogs from './Pages/Admin/UserLogs/UserLogs';
import ProtectedRoute from './ProtectedRoutes/ProtectedRoutes';

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={LogIn} />
          <Route path="/userLogs/:id" component={UserLogs}/> 
          <ProtectedRoute path="/Home" component={Home}/>
          <ProtectedRoute path="/ManagerHome" component={ManagerHome}/>
          <ProtectedRoute path="/AdminHome" component={AdminHome}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
