import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbot from './Chatbot.jsx';
import Homescreen from './Homescreen.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Homescreen/>} />
          <Route exact path="/chatbot" element={<Chatbot/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
