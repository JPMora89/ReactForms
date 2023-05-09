import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ToDoList from './ToDoList';

it('renders without crashing', () => {
    render(<ToDoList />);
    }
);

it('matches snapshot', () => {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
}
);

