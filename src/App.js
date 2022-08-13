  import { 
    OEI, 
    insights, 
    risk, 
    rosi,
  } from "./pages"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/element/common/header';;
function App() {
  return (
     <Router>
      <Header />
      <Switch>
        <Route path='/' component={OEI}
        exact
        />
        <Route path='/Insights' component={insights} />
        <Route path='/oei' component={OEI} />
        <Route path='/Risk' component={risk} />
        <Route path='/Rosi' component={rosi} />
      </Switch>
    </Router>
  );
}
  
export default App;