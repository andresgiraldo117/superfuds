import { SHOW_LOANDING } from '../constants/action-types'

const initialState = {
   Loading: false,
}

export const showLoading = (state = initialState, action) => {
   switch (action.type) {
       case SHOW_LOANDING:
           return {...state, 
                Loading : action.payload,
           }
       default:
           return state 
   }
}


