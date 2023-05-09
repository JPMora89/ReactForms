import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
    render(<BoxList />);
    }
);

it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', () => {
    const { getByLabelText, queryByText } = render(<BoxList />);
    // no boxes yet
    expect(queryByText('X')).not.toBeInTheDocument();
    // fill out the form
    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const colorInput = getByLabelText('Color:');
    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(colorInput, { target: { value: 'red' } });
    // submit form
    const submitBtn = queryByText('Add a new box!');
    fireEvent.click(submitBtn);
    // box exists!
    const removeBtn = queryByText('X');
    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn.previousSibling).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: red;
    `);
});
    