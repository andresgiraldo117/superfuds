import { ADD_PRODUCT, REMOVE_PRODUCT, SHOW_LOANDING, SHOW_PRODUCTS } from '../../constants/action-types'

const initialState = {
    products: [],
    listShooppinCar: [],
    showLoading: false,

}

export const showProducts = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOANDING:
            return {...state, 
                showLoading : action.payload,
            }
        case SHOW_PRODUCTS:
            return {...state , products : action.payload}
        default:
            return state 
    } 
}
export const addProducts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            let list;
            list = state.listShooppinCar;
            list.push(action.payload)
            return {...state , listShooppinCar : list}
        case REMOVE_PRODUCT:
            let list2 = (state.listShooppinCar).filter(item => action.payload.id !== item.id)
            return {...state , listShooppinCar : list2}
        default:
            return state 
    } 
}