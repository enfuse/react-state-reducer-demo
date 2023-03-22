const PLATFORMS = Object.freeze({
		ANDROID: 0,
		CROSS_PLATFORM: 1,
		IOS: 2
})

const SELECTIONS = Object.freeze({
		NOT_INTERESTED: 0,
		SLIGHTLY_INTERESTED: 1,
		VERY_INTERESTED: 2
})

const defaultMobileState = {
		userInterestInFunctional: SELECTIONS.NOT_INTERESTED,
		userInterestInModernity: SELECTIONS.NOT_INTERESTED,
		userInterestInOpenSource: SELECTIONS.NOT_INTERESTED,
		userInterestInSingleLanguage: SELECTIONS.NOT_INTERESTED,
		userPlatformPreference: PLATFORMS.ANDROID
}

const MOBILE_ACTIONS = Object.freeze({
		SET_FUNCTIONAL: 0,
		SET_MODERNITY: 1,
		SET_OPEN_SOURCE: 2,
		SET_SINGLE_LANGUAGE: 3,
		SET_PLATFORM: 4
})

const mobileStateReducer = (state, action) => {
		switch (action.type) {
				case MOBILE_ACTIONS.SET_FUNCTIONAL:
						return {
								...state,
								userInterestInFunctional: action.value
						}
				case MOBILE_ACTIONS.SET_MODERNITY:
						return {
								...state,
								userInterestInModernity: action.value
						}
				case MOBILE_ACTIONS.SET_OPEN_SOURCE:
						return {
								...state,
								userInterestInOpenSource: action.value
						}
				case MOBILE_ACTIONS.SET_PLATFORM:
						return {
								...state,
								userPlatformPreference: action.value
						}
				case MOBILE_ACTIONS.SET_SINGLE_LANGUAGE:
						return {
								...state,
								userInterestInSingleLanguage: action.value
						}
				default:
						return {...state}
		}
}

export {
		defaultMobileState,
		MOBILE_ACTIONS,
		mobileStateReducer,
		PLATFORMS
}