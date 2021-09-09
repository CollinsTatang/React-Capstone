const initialState = { countries: [], totalConfirmed: 0, ready: false };

export const FETCH_DATA = 'data/FETCH_DATA';
const ADD_COUNTRY = 'countries/ADD_REGION';
const SET_TOTAL = 'numbers/SET_TOTAL_CONFIRMED';
const CHANGE_READY = 'ready/CHANGE';

export const addCountry = (country) => ({
  type: ADD_COUNTRY,
  payload: country,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const changeReadyState = () => ({
  type: CHANGE_READY,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, countries: [...state.countries, action.payload] };
    case SET_TOTAL:
      return { ...state, totalConfirmed: action.payload };
    case CHANGE_READY:
      return { ...state, ready: !state.ready };
    default:
      return state;
  }
};

export const countries = (state) => state.countries;
export const totalConfirmed = (state) => state.totalConfirmed;
export const ready = (state) => state.ready;
export default reducer;
