import * as types from '../constants/actionTypes';

export const getChooseProduct = value => async dispatch => {
  try {
    dispatch({
      type: types.CHOOSE_PRODUCT,
      payload: value
    })
  }catch (err) {
    console.log(err);
  }
};

export const getProduct = value => async dispatch => {
  try {
    dispatch ({
      type: types.GET_PRODUCT,
      payload: value
    })
  }catch (err) {
    console.log(err);
  }
}

export const checkStatus = value => async dispatch => {
  try {
    dispatch ({
      type: types.CHECK_STATUS,
      payload: value
    })
  }catch (err) {
    console.log(err);
  }
}

export const shutDown = value => async dispatch => {
  try {
    dispatch ({
      type: types.RESET_STATE,
      payload: value
    })
  }catch (err) {
    console.log(err);
  }
}