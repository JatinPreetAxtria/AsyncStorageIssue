import ActionTypes from '../actions/actionType'
import { ScreenStates,ScreenName } from '../../util/Constants'
export const messageReducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.MESAGE_REDUCER:
            console.log("MESAGE_REDUCER:" + action.payload)
            return action.payload
        default:
            console.log("MESAGE_REDUCER_DEFAULT:" + state)
            return state
    }
}