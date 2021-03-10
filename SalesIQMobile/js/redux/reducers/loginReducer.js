export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.LOADING_MSG:
            console.log("LOADING_MSG:" + action.payload)
            return action.payload
        default:
            console.log("LOADING_MSG_DEFAULT:" + state)
            return state
    }
}