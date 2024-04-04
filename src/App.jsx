
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightInformationPage from "FlightInformationPage.jsx";

function App() {


  return (
    <>
    <Router>
        <Routes>
        <Route exact path= "flight-information" element={<FlightInformationPage/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App;
