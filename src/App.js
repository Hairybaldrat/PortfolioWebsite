import './App.css';
import Navbar from './Nav.js';
import Profile from './Profile.js'
import Contact from './Contact.js'
import Projects from './Project.js'

function App() {
  return (
      <div className="App">
          <Navbar />
          <div className="Content">
              <Profile />
              <Projects />
              <Contact />
          </div>
    </div>
  );
}

export default App;
