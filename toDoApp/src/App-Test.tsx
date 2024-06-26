import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import App from "./App.tsx";

test('does not add empty todo', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<App />);
  
  const input = getByPlaceholderText('Add your to-do here');
  const addButton = getByText('Add');

  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(addButton);

  // Assert that no new item is added
  expect(queryByText('1')).toBeNull(); // Assuming '1' is the ID text
});


test('assigns unique ID to todos', () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
  
  const input = getByPlaceholderText('Add your to-do here');
  const addButton = getByText('Add');

  fireEvent.change(input, { target: { value: 'Test Todo 1' } });
  fireEvent.click(addButton);

  fireEvent.change(input, { target: { value: 'Test Todo 2' } });
  fireEvent.click(addButton);

  const todo1 = getByTestId('todo-1');
  const todo2 = getByTestId('todo-2');

  // Assert unique IDs
  expect(todo1).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();
  expect(todo1.textContent).toContain('1');
  expect(todo2.textContent).toContain('2');
});


test('deletes todo', () => {
  const { getByPlaceholderText, getByText, getByTestId, queryByText } = render(<App />);
  
  const input = getByPlaceholderText('Add your to-do here');
  const addButton = getByText('Add');

  fireEvent.change(input, { target: { value: 'Test Todo 1' } });
  fireEvent.click(addButton);

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  // Assert deletion
  expect(queryByText('Test Todo 1')).not.toBeInTheDocument();
});


test('renders empty state message', () => {
  const { getByText } = render(<App />);

  // Assert initial empty state message
  expect(getByText('No todos yet')).toBeInTheDocument();
});


test('handles malformed input', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<App />);
  
  const input = getByPlaceholderText('Add your to-do here');
  const addButton = getByText('Add');

  // Add todo with numeric input (malformed)
  fireEvent.change(input, { target: { value: '123' } });
  fireEvent.click(addButton);

  // Assert that no new item is added
  expect(queryByText('123')).toBeNull();
});

