import ActionTypes from '../actions/actionType'
import { ScreenStates,ScreenName } from '../../util/Constants'
export const settingReducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.SETTING_REDUCER:
            console.log("SETTING_REDUCER:" + action.payload)
            return action.payload
        default:
            console.log("SETTING_REDUCER_DEFAULT:" + state)
            return state
    }
}