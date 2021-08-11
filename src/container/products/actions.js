import { ADD_PRODUCT, REMOVE_PRODUCT, SHOW_LOANDING, SHOW_PRODUCTS } from '../../constants/action-types'

import { url_superfuds } from '../../params/apis'

export const addProducts = (item,action) => {
    if(action === 'ADD'){
        return(dispatch) => {
            return dispatch({type: ADD_PRODUCT ,payload: item})
        }
    }else if(action === 'REMOVE'){
        return(dispatch) => {
            return dispatch({type: REMOVE_PRODUCT ,payload: item})
        }
    }

}

export const showProducts = () => {

    let url = url_superfuds.get_all;

    return (dispatch) => {
    dispatch( { type: SHOW_LOANDING, payload: true } ) 
        fetch(url, {
            method: 'GET',
            //mode: 'cors',
            headers:{
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                //"Authorization": ''
            }
        }).then(res => { return res.json(); })
        .catch(error => {
            console.error('Error ==>', error)
            return { status:'error', message: [error] }  
        })
        .then(response => {
            return( dispatch( { type: SHOW_PRODUCTS, payload: response }),
                    dispatch( { type: SHOW_LOANDING, payload: false } ) )

        });
    }
} 