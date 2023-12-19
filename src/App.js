import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.js'
import Resume from './components/Resume.js'
import BMI from './components/BMI.js'

function App() {
  return (
    <Router>
      <div class='main-container'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/bmi">BMI</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/bmi' element={<BMI/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
