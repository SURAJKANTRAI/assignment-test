import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OEI,} from './pages';
import Header from './components/element/common/header';

function App() {
  return (
     <Router>
      <Header />
      <Switch>
        <Route path='/' component={OEI} />
        <Route path='/oei' component={OEI} />
      </Switch>
    </Router>
  );
}
  
export default App;