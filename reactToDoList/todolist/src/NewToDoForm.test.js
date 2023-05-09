import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewToDoForm from './NewToDoForm';

it('renders without crashing', () => {
    render(<NewToDoForm />);
    });

it('matches snapshot', () => {
    const { asFragment } = render(<NewToDoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it('can add a new todo', () => {
    const { getByLabelText, queryByText } = render(<NewToDoForm />);
    // no todos yet
    expect(queryByText('X')).not.toBeInTheDocument();
    // fill out the form
    const taskInput = getByLabelText('Task:');
    fireEvent.change(taskInput, { target: { value: 'Walk the dog' } });
    // submit form
    const submitBtn = queryByText('Add a new task!');
    fireEvent.click(submitBtn);
    // todo exists!
    const removeBtn = queryByText('X');
    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn.previousSibling).toHaveTextContent('Walk the dog');
}   
);
