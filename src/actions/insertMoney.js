import * as types from '../constants/actionTypes';

export const insertMoney = (value) => async dispatch => {
  try {
    dispatch({
      type: types.INSERT_MONEY,
      payload: value
    })
  }catch (err) {
    console.log(err);      
  }
}