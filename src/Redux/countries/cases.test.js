import reducer, { addCountry } from './cases';

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
    name: 'Cameroon',
    id: 'Douala',
    total_confirmed: 85000,
  }));

  expect(newState).toEqual(
    {
      countries: [
        {
          name: 'Cameroon',
          id: 'Douala',
          total_confirmed: 85000,
        },
      ],
      totalConfirmed: 0,
    },
  );
});
