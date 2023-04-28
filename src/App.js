import './App.css';
import { Route , Routes, BrowserRouter} from "react-router-dom"
import Home from './pages/Home.js'
import Attendance from './pages/Attendance.js'

function App() {
    return (
      <BrowserRouter>
      <div className="App">
                <Routes >
                    <Route path="/Attendance" element={<Attendance />} />
                    <Route path="/" element={<Home /> } />
          </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
