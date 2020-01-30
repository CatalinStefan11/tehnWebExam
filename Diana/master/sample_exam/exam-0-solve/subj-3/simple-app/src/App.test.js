import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, waitForElement } from 'react-testing-library';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders messages', () => {
  const { getByText } = render(<App />);
  expect(getByText('first test message')).toBeDefined();
})

it('can add messages', async () => {
  const { getByText, getByLabelText } = render(<App />)
  let field = getByLabelText('Content')
  field.value = 'added'
  fireEvent.change(field)
  fireEvent.click(getByText('+'))
  // const result = await waitForElement(() =>
  //   getByText('added'),
  // )
  // console.warn(result)
  expect(getByText('added')).toBeDefined()
})
