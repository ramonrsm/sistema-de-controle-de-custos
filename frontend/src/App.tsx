import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/*" component={Routes} />        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
