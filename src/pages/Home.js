import Navbar from '../Nav.js';
import Profile from '../Profile.js'
import Contact from '../Contact.js'
import Projects from '../Project.js'
import "./CSS/Home.css"

function Home() {
    return (
        <div>
                  <Navbar />
          <div className="Content">
              <Profile />
              <Projects />
              <Contact />
            </div>
        </div>
    );
}

export default Home