import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeForm from './Components/EmployeeForm';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/employee">Employee Form</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;