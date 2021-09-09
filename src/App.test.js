import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Redux/configureStore';
import App from './App';
import { addCountry } from './Redux/countries/cases';

test('Should display the header', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  const headerText = screen.getByText(/COVID-19 STATS/i);
  expect(headerText).toBeInTheDocument();
});

test('Should go to the details page when a country is clicked', () => {
  store.dispatch(addCountry({
    name: 'SPAIN',
    id: 'spain',
    total_confirmed: 200000,
    regions: [],
  }));

  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  const countryElement = screen.getByText(/SPAIN/i);

  fireEvent.click(countryElement);
  const subHeading = screen.getByText(/SPAIN CASES BREAKDOWN/i);
  expect(subHeading).toBeInTheDocument();
});

test('Should go back to the home page when the back button is clicked', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  const countryElement = screen.getByText('SPAIN');

  fireEvent.click(countryElement);
  const subHeading = screen.getByText(/SPAIN CASES BREAKDOWN/i);
  expect(subHeading).toBeInTheDocument();

  const backButton = screen.getByText(/< HOME/i);
  fireEvent.click(backButton);

  const heading = screen.getByText(/GLOBAL/i);
  expect(heading).toBeInTheDocument();
});
