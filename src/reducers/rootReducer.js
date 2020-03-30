import { combineReducers } from 'redux';
import { insertMoney } from './insertMoney';
import { getChooseProduct } from './chooseProduct';

const reducers = combineReducers({
    insertMoney,
    getChooseProduct
});

export default reducers;