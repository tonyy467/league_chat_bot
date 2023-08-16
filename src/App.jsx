import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatbot from './Chatbot.jsx';
import Homescreen from './Homescreen.jsx';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Homescreen} />
          <Route path="/chatbot" component={Chatbot} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
