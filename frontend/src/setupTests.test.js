// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
 
import App from './App';
import ArticleCreate from './pages/ArticleCreate/ArticleCreate'
import AuthorCreate from './pages/AuthorCreate/AuthorCreate'
import AuthorDropDown from './components/AuthorDropdown/AuthorDropdown'
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    screen.debug();
  });
});

describe('ArticleCreate', () => {
  test('renders Article component', async () => {
    render(<ArticleCreate />);
 
    expect(await screen.getByText(/Create Article/)).toBeInTheDocument();
  });
});

describe('AuthorCreate', () => {
  test('renders Author component', async () => {
    render(<AuthorCreate />);
 
    expect(await screen.getByText(/Create Author/)).toBeInTheDocument();
  });
});
 
jest.mock('axios');
 
describe('AuthorDropDown', () => {
  test('fetches authors from an backend API and displays them', async () => {
    const authors = [
      { authorId: 1, firstname: 'Hello', lastname: 'World' }
    ];
 
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: authors } })
    );
 
    render(<AuthorDropDown />);
 
    const items = await screen.getAllByRole('combobox');
    expect(items).toHaveLength(1);
  });
});

