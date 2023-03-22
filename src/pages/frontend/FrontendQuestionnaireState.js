export const EXPERIENCE = Object.freeze({
    NOT_EXPERIENCED: 0,
    SLIGHTLY_EXPERIENCED: 1,
    VERT_EXPERIENCED: 2
})

const SELECTIONS = Object.freeze({
    NOT_INTERESTED: 0,
    SLIGHTLY_INTERESTED: 1,
    VERY_INTERESTED: 2
})

const defaultFrontendState = {
    userExperienceWithFrontend: EXPERIENCE.NOT_EXPERIENCED,
    userInterestInFunctional: SELECTIONS.NOT_INTERESTED,
    userInterestInModernity: SELECTIONS.NOT_INTERESTED,
    userInterestInOpenSource: SELECTIONS.NOT_INTERESTED,
    userInterestInUpdates: SELECTIONS.NOT_INTERESTED
}

const FRONTEND_ACTIONS = Object.freeze({
    SET_EXPERIENCE: 0,
    SET_FUNCTIONAL: 1,
    SET_OPEN_SOURCE: 2,
    SET_MODERNITY: 3,
    SET_UPDATES: 4
})

const frontendStateReducer = (state, action) => {
    switch (action.type) {
        case FRONTEND_ACTIONS.SET_EXPERIENCE:
            return {
                ...state,
                userExperienceWithFrontend: action.value
            }
        case FRONTEND_ACTIONS.SET_FUNCTIONAL:
            return {
                ...state,
                userInterestInFunctional: action.value
            }
        case FRONTEND_ACTIONS.SET_MODERNITY:
            return {
                ...state,
                userInterestInModernity: action.value
            }
        case FRONTEND_ACTIONS.SET_OPEN_SOURCE:
            return {
                ...state,
                userInterestInOpenSource: action.value
            }
        case FRONTEND_ACTIONS.SET_UPDATES:
            return {
                ...state,
                userInterestInUpdates: action.value
            }
        default:
            return {...state}
    }
}

export {
    defaultFrontendState,
    FRONTEND_ACTIONS,
    frontendStateReducer
}