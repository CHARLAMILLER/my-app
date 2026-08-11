import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees = [], onDelete }) {
    if (!employees.length) return <div><h2>Employee List</h2><p>No employees yet.</p></div>;

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((e) => (
                    <li key={e.EmployeeId}>
                        <Link to={`/employee/${e.EmployeeId}`}>{e.name || e.Name || 'Unnamed'}</Link>
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
