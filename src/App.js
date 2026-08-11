import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetail from './Components/EmployeeDetail';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  const [employees, setEmployees] = useState([]);

  // Load employees from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('employees');
      if (raw) setEmployees(JSON.parse(raw));
      else if (process.env.NODE_ENV === 'development') {
        // Seed a test employee for development when no data exists
        setEmployees([{ EmployeeId: 12345, name: 'Test Employee', email: 'test@example.com', title: 'Developer', department: 'Engineering' }]);
      }
    } catch (e) {
      console.error('Failed to parse employees from localStorage', e);
    }
  }, []);

  // Persist employees to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('employees', JSON.stringify(employees));
    } catch (e) {
      console.error('Failed to save employees to localStorage', e);
    }
  }, [employees]);

  const addEmployee = (emp) => {
    const id = emp.EmployeeId || Math.floor(Math.random() * 1000000);
    const newEmp = { ...emp, EmployeeId: id };
    setEmployees((prev) => [newEmp, ...prev]);
  };

  const removeEmployee = (id) => {
    setEmployees((prev) => prev.filter((e) => String(e.EmployeeId) !== String(id)));
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/employee">New Employee</Link> | <Link to="/employees">Employee List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<EmployeeForm onSubmit={addEmployee} />} />
          <Route path="/employees" element={<EmployeeList employees={employees} onDelete={removeEmployee} />} />
          <Route path="/employee/:id" element={<EmployeeDetail employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;