import * as types from '../constants/actionTypes';

export const initialState = {
  blockForMoney: 'Insert banknotes...',
  failedBlock: 'Unknown banknote!',
  changeLabel: 'Choose product...'
};

export const insertMoney = (state = initialState, action) => {
  switch (action.type) {
    case types.INSERT_MONEY: 
      return {
        ...state, 
        blockForMoney: action.payload
      };
    default: 
      return state;      
  }
}