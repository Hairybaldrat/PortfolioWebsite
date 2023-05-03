import './App.css';
import { Route , Routes, BrowserRouter} from "react-router-dom"
import Home from './pages/Home.js'
import Attendance from './pages/Attendance.js'
import Mugan from './pages/Mugan.js'
import Judge from './pages/Judge.js'
import Monkey from './pages/Monkey.js'

function App() {


    return (
        <BrowserRouter>
            <div className="App">
                <Routes >
                    <Route path="/Attendance" element={<Attendance />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Mugan-Trial" element={<Mugan />} />
                    <Route path="/Monkey-Site" element={<Monkey />} />
                    <Route path="/Judge" element={<Judge />} />
          </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
