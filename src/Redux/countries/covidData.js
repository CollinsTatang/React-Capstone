const apiEndpoint = 'https://api.covid19tracking.narrativa.com/api/';
const initialState = { countries: [], totalConfirmed: 0 };

export const FETCH_DATA = 'data/FETCH_DATA';
const ADD_COUNTRY = 'countries/ADD_REGION';
const SET_TOTAL = 'numbers/SET_TOTAL_CONFIRMED';

const fetchCovidData = async () => {
  const today = new Date().toISOString().split('T')[0];
  let res = await fetch(`${apiEndpoint}/${today}`);
  res = await res.json();
  return res;
};

export const addCountry = (country) => ({
  type: ADD_COUNTRY,
  payload: country,
});

const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const fetchData = async (dispatch) => {
  const data = await fetchCovidData();
  const today = new Date().toISOString().split('T')[0];
  dispatch(setTotal(data.total.today_confirmed));
  Object.keys(data.dates[today].countries).forEach((country) => {
    dispatch(addCountry(data.dates[today].countries[country]));
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, countries: [...state.countries, action.payload] };
    case SET_TOTAL:
      return { ...state, totalConfirmed: action.payload };
    default:
      return state;
  }
};

export const countries = (state) => state.countries;
export const totalConfirmed = (state) => state.totalConfirmed;
export default reducer;
