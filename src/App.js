import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './Landing';
import Home from './Home';

function App() {
  return (
      <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
       </Switch>
      </>
  );
}

export default App;
