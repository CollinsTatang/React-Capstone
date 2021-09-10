import  { addCountry, setTotal, changeReadyState } from './cases';
const ADD_COUNTRY = 'countries/ADD_REGION';
const SET_TOTAL = 'numbers/SET_TOTAL_CONFIRMED';
const CHANGE_READY = 'ready/CHANGE';

describe('Testing actions of receiving data', () => {
  it('reciveReservationMissions working fine', () => {
    const payload = [];
    const expected = {
      type: ADD_COUNTRY,
      payload,
    };
    expect(addCountry(payload)).toEqual(expected);
  });

  it('reciveReservationrockets working fine', () => {
    const payload = '38993';
    const expected = {
      type: SET_TOTAL,
      payload,
    };
    expect(setTotal(payload)).toEqual(expected);
  });

  it('reciveReservationrockets working fine', () => {
    const payload = '38993';
    const expected = {
      type: CHANGE_READY,
    };
    expect(changeReadyState(payload)).toEqual(expected);
  });
});