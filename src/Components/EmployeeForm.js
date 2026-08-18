import React from 'react';
import '../Content/employee.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', phone: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state);
        this.setState({ name: '', email: '', phone: '' });
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <div className="employee-form-container">
                <form className="employee-form" onSubmit={this.handleSubmit}>
                    <h2 className="form-title">Add Employee</h2>

                    <label className="form-label">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            required
                        />
                    </label>

                    <label className="form-label">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                    </label>

                    <label className="form-label">
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit" className="submit-button">Add</button>
                </form>
            </div>
        );
    }
}

export default EmployeeForm;
