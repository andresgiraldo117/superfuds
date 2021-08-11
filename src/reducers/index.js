import { addProducts, showProducts } from '../container/products/reducers';

import { combineReducers } from 'redux';
import { showLoading } from './loadingAll';

const rootReducer = combineReducers({
    showProducts,
    showLoading,
    addProducts,
}); 

export default rootReducer