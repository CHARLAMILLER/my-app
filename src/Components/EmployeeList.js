import React from 'react';
import { Link } from 'react-router-dom';
import '../Content/employee.css';

function EmployeeList({ employees = [], onDelete }) {
    if (!employees.length) return <div className="employee-list"><h1>Employee List</h1><p>No employees yet.</p></div>;

    return (
        <div className="employee-list">
            <h1>Employee List</h1>
            <ul>
                {employees.map((e) => (
                    <li key={e.EmployeeId}>
                        <Link to={`/employees/${e.EmployeeId}`}>{e.name || e.Name || 'Unnamed'}</Link>
                        {e.email ? ` — ${e.email}` : ''}
                        {onDelete && (
                            <button onClick={() => onDelete(e.EmployeeId)} style={{ marginLeft: 8 }}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
