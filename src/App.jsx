import './App.css'
import Navbar from './component/Navbar.jsx'
import DropArea from './component/DropArea.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import About from './component/About/About.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<DropArea />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
