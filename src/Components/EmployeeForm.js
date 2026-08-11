import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', title: '', department: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Submitted employee:', this.state);
        if (this.props.onSubmit) this.props.onSubmit(this.state);
        this.setState({ name: '', email: '', title: '', department: '' });
    }

    render() {
        const { name, email, title, department } = this.state;
        return (
            <div className="employee-form-container">
                <form className="employee-form" onSubmit={this.handleSubmit}>
                    <h2>New Employee</h2>

                    <label className="form-label">
                        Name
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            required
                        />
                    </label>

                    <label className="form-label">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                    </label>

                    <label className="form-label">
                        Job Title
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className="form-label">
                        Department
                        <input
                            type="text"
                            name="department"
                            value={department}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit" className="submit-button">Add Employee</button>
                </form>
            </div>
        );
    }
}

export default EmployeeForm;
