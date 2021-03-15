import ActionTypes from '../actions/actionType'
import { ScreenStates,ScreenName } from '../../util/Constants'
export const callPlanReducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.CALL_PLAN_REDUCER:
            console.log("CALL_PLAN_REDUCER:" + action.payload)
            return action.payload
        default:
            console.log("CALL_PLAN_REDUCER_DEFAULT:" + state)
            return state
    }
}