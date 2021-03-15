import ActionTypes from '../actions/actionType'
import { ScreenStates,ScreenName } from '../../util/Constants'
export const dashBoardReducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.DASHBOARD_REDUCER:
            console.log("DASHBOARD_REDUCER:" + action.payload)
            return action.payload
        default:
            console.log("DASHBOARD_REDUCER_DEFAULT:" + state)
            return state
    }
}