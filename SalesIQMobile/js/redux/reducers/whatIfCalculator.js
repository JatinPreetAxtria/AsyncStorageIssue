import ActionTypes from '../actions/actionType'
import { ScreenStates,ScreenName } from '../../util/Constants'
export const whatIfCalculatorReducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.WHAT_IF_CALCULATOR_REDUCER:
            console.log("WHAT_IF_CALCULATOR_REDUCER:" + action.payload)
            return action.payload
        default:
            console.log("WHAT_IF_CALCULATOR_REDUCER_DEFAULT:" + state)
            return state
    }
}