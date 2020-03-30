import * as types from '../constants/actionTypes';

export const initialState = {
  chooseProduct: [],
  status: '.',
  finishOperation: null
}

export const getChooseProduct = (state = initialState, action) => {
  switch (action.type) {
    case types.CHOOSE_PRODUCT: 
      return {
        ...state, 
        chooseProduct: action.payload
      };
    case types.GET_PRODUCT:
      return {
        ...state,
        finishOperation: action.payload
      }
    case types.CHECK_STATUS:
      return {
        ...state, 
        status: action.payload
      }
    default: 
      return state;
  }
}


