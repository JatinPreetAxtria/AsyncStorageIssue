import ActionType from './actionType';

export const setDashBoardAction = item => {
    return {
      type: ActionType.DASHBOARD_REDUCER,
      payload: item
    }
}

export const callDashBoardApiAction = item => {
    return {
      type: ActionType.DASHBOARD_SAGA,
      payload: item
    }
}

export const callMessageApiAction = item => {
    return {
      type: ActionType.MESAGE_SAGA,
      payload: item
    }
}

export const setMessageAction = item => {
    return {
      type: ActionType.MESAGE_REDUCER,
      payload: item
    }
}

export const setwhatIfCalculatorAction = item => {
    return {
      type: ActionType.WHAT_IF_CALCULATOR_REDUCER,
      payload: item
    }
}

export const callwhatIfCalculatorApiAction = item => {
    return {
      type: ActionType.WHAT_IF_CALCULATOR_SAGA,
      payload: item
    }
}

export const callCallPlanApiAction = item => {
    return {
      type: ActionType.CALL_PLAN_SAGA,
      payload: item
    }
}

export const setCallPlanAction = item => {
    return {
      type: ActionType.CALL_PLAN_REDUCER,
      payload: item
    }
}

export const setSettingsAction = item => {
    return {
      type: ActionType.SETTING_REDUCER,
      payload: item
    }
}

export const callSettingsApiAction = item => {
    return {
      type: ActionType.SETTING_SAGA,
      payload: item
    }
}