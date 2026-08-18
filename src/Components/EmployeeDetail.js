import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Content/employee.css';

function EmployeeDetail({ employees = [] }) {
    const { id } = useParams();
    const emp = employees.find((e) => String(e.EmployeeId) === String(id));

    if (!emp) return <div className="employee-detail"><h2>Employee Detail</h2><p>Employee not found.</p><Link to="/employees">Back to list</Link></div>;

    return (
        <div className="employee-detail">
            <h2>Employee Detail</h2>
            <table>
                <tbody>
                    <tr><td>ID</td><td>{emp.EmployeeId}</td></tr>
                    <tr><td>Name</td><td>{emp.name || emp.Name}</td></tr>
                    <tr><td>Email</td><td>{emp.email}</td></tr>
                    <tr><td>Title</td><td>{emp.title}</td></tr>
                    <tr><td>Department</td><td>{emp.department}</td></tr>
                </tbody>
            </table>
            <Link to="/employees">Back to list</Link>
        </div>
    );
}

export default EmployeeDetail;
