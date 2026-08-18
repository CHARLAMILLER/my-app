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
      // localStorage.getItem returns a string (or null). We stored JSON there,
      // so retrieve the string and parse it back to an array/object with
      // JSON.parse before putting it into React state.
      const raw = localStorage.getItem('employees');
      if (raw) {
        // Parse the stored JSON string into the original JavaScript array
        setEmployees(JSON.parse(raw));
      } else if (process.env.NODE_ENV === 'development') {
        // Seed a test employee for development when no data exists
        // (This will also be persisted by the saving effect below.)
        setEmployees([{ EmployeeId: 12345, name: 'Test Employee', email: 'test@example.com', title: 'Developer', department: 'Engineering' }]);
      }
    } catch (e) {
      console.error('Failed to parse employees from localStorage', e);
    }
  }, []);

  // Persist employees to localStorage whenever they change
  useEffect(() => {
    try {
      // localStorage only stores strings. Convert the employees array to a
      // JSON string with JSON.stringify before saving it with setItem.
      localStorage.setItem('employees', JSON.stringify(employees));
    } catch (e) {
      console.error('Failed to save employees to localStorage', e);
    }
  }, [employees]);

  const addEmployee = (emp) => {
    // Ensure the new employee has a unique ID. If one was supplied use it,
    // otherwise generate a simple random ID.
    const id = emp.EmployeeId || Math.floor(Math.random() * 1000000);
    const newEmp = { ...emp, EmployeeId: id };

    // Update React state. The saving effect above will serialize and persist
    // the updated `employees` array to localStorage automatically.
    setEmployees((prev) => [newEmp, ...prev]);
  };

  const removeEmployee = (id) => {
    setEmployees((prev) => prev.filter((e) => String(e.EmployeeId) !== String(id)));
  };

  const EmployeePage = () => (
    <div className="employee-page">
      <EmployeeForm onSubmit={addEmployee} />
      <EmployeeList employees={employees} onDelete={removeEmployee} />
    </div>
  );

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EmployeePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
          <Route path="/employee/:id" element={<EmployeeDetail employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;