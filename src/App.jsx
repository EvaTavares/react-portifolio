import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Navbar from "../src/components/navbar/navBar";


function App() {
  return (
    <>     
     <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>

     </div>
    </>
  )
}

export default App
