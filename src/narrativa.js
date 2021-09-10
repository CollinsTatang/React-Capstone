import { addCountry, changeReadyState, setTotal } from './Redux/countries/cases';

const apiEndpoint = 'https://api.covid19tracking.narrativa.com/api/';

export const fetchCovidData = async () => {
  const today = new Date().toISOString().split('T')[0];
  let res = await fetch(`${apiEndpoint}/${today}`);
  res = await res.json();
  return res;
};

export const fetchData = async (dispatch) => {
  const data = await fetchCovidData();
  const today = new Date().toISOString().split('T')[0];
  dispatch(setTotal(data.total.today_confirmed));
  Object.keys(data.dates[today].countries).forEach((country) => {
    dispatch(addCountry(data.dates[today].countries[country]));
  });
  dispatch(changeReadyState());
};
