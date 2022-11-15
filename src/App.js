import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Drinks from "./components/Drinks";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/drinks" element={<Drinks />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
