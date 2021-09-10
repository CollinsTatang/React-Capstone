import { addCountry, setTotal, changeReadyState } from './cases';

const ADD_COUNTRY = 'countries/ADD_REGION';
const SET_TOTAL = 'numbers/SET_TOTAL_CONFIRMED';
const CHANGE_READY = 'ready/CHANGE';

describe('Testing actions of receiving data', () => {
  it('should handle a country\'s data being added to the store', () => {
    const payload = [];
    const expected = {
      type: ADD_COUNTRY,
      payload,
    };
    expect(addCountry(payload)).toEqual(expected);
  });

  it('Set cases working fine', () => {
    const payload = '38993';
    const expected = {
      type: SET_TOTAL,
      payload,
    };
    expect(setTotal(payload)).toEqual(expected);
  });

  it('Change  working fine', () => {
    const payload = '38993';
    const expected = {
      type: CHANGE_READY,
    };
    expect(changeReadyState(payload)).toEqual(expected);
  });
});
