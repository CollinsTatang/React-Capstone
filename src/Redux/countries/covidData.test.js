import reducer, { addCountry } from './covidData';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      countries: [],
      totalConfirmed: 0,
    },
  );
});

test('should handle a country\'s data being added to the store', () => {
  const previousState = {
    countries: [],
    totalConfirmed: 0,
  };

  const newState = reducer(previousState, addCountry({
    name: 'Nigeria',
    id: 'nigeria',
    total_confirmed: 200000,
  }));

  expect(newState).toEqual(
    {
      countries: [
        {
          id: 'nigeria',
          name: 'Nigeria',
          total_confirmed: 200000,
        },
      ],
      totalConfirmed: 0,
    },
  );
});
