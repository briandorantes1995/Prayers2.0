import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registro from "./Components/Registro";
import Login from "./Components/Login"

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/registro" element={<Registro/>}/>
              <Route exact path="/" element={<Login/>}/>
          </Routes>
      </Router>
  );
}

export default App;
