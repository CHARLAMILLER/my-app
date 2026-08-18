import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
  window.history.pushState({}, '', '/employees');
});

test('shows employee list items with the assignment route format', () => {
  const employee = {
    EmployeeId: 12345,
    name: 'Test Employee',
    email: 'test@example.com',
    title: 'Developer',
    department: 'Engineering'
  };

  window.localStorage.setItem('employees', JSON.stringify([employee]));

  render(<App />);

  expect(screen.getByText(/Employee List/i)).toBeInTheDocument();
  const employeeLink = screen.getByRole('link', { name: /Test Employee/i });
  expect(employeeLink).toHaveAttribute('href', '/employees/12345');
});
