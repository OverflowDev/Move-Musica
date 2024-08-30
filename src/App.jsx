import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Home from "./components/Home"
import Navbar from "./layouts/Navbar"


function App() {

  return (
    <div className='min-h-screen flex flex-col text-white font-outfit overflow-hidden'>
      <Router> 

        {/* <Navbar /> */}

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

      </Router>
    </div>
  )
}

export default App
