import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
