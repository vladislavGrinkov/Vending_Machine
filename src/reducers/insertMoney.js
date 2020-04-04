import * as types from '../constants/actionTypes';

export const initialState = {
  blockForMoney: 'Insert banknotes...',
  failedBlock: 'Unknown banknote!',
  changeLabel: 'Choose product...',
  defaultInput: '...'
};

export const insertMoney = (state = initialState, action) => {
  switch (action.type) {
    case types.INSERT_MONEY: 
      return {
        ...state, 
        blockForMoney: action.payload
      };
    case types.RESET_STATE:
      return {
        ...state,
        blockForMoney: 'Insert banknotes...',
        failedBlock: 'Unknown banknote!',
        changeLabel: 'Choose product...'
      }
    default: 
      return state;      
  }
}