
import './App.css';
import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import View from "./pages/view/View"

function App() {
  return (
      <Router>
          <div >
              <Switch>
                  <Route  exact path="/">
                      <Home/>
                  </Route>
                  <Route  path="/View">
                      <View/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
