import {AndroidIcon, DartIcon, FlutterIcon, IosIcon, ReactIcon} from "../../components/FrameworkIcons";
import {JavaIcon, JavaScriptIcon, KotlinIcon, ObjectiveCIcon, SwiftIcon} from "../../components/LanguageIcons";
import {EspressoIcon, JestIcon, XcTestIcon} from "../../components/TestingIcons";

const PLATFORMS = Object.freeze({
		ANDROID: '0',
		CROSS_PLATFORM: '1',
		IOS: '2'
})

const SELECTIONS = Object.freeze({
		NOT_INTERESTED: '0',
		SLIGHTLY_INTERESTED: '1',
		VERY_INTERESTED: '2'
})

const defaultMobileState = {
		pageContent: 'quiz',
		resultStatus: {
				frameworkDescription: '',
				frameworkIcon: <></>,
				languageDescription: '',
				languageIcon: <></>,
				testingDescription: '',
				testingIcon: <></>,
		},
		userInterestInFunctional: SELECTIONS.NOT_INTERESTED,
		userInterestInModernity: SELECTIONS.NOT_INTERESTED,
		userInterestInOpenSource: SELECTIONS.NOT_INTERESTED,
		userInterestInSingleLanguage: SELECTIONS.NOT_INTERESTED,
		userPlatformPreference: PLATFORMS.ANDROID
}

const MOBILE_ACTIONS = Object.freeze({
		GENERATE_RESULTS: 0,
		RESET_PAGE: 1,
		SET_FUNCTIONAL: 2,
		SET_MODERNITY: 3,
		SET_OPEN_SOURCE: 4,
		SET_SINGLE_LANGUAGE: 5,
		SET_PLATFORM: 6
})

const calculateResultStatus = (state) => {
		switch (state.userPlatformPreference) {
				case PLATFORMS.ANDROID:
						return {
								...state.resultStatus,
								frameworkDescription: 'Android',
								frameworkIcon: <AndroidIcon/>,
								languageDescription: state.userInterestInModernity === '0' ? 'Java' : 'Kotlin',
								languageIcon: state.userInterestInModernity === '0' ? <JavaIcon/> : <KotlinIcon/>,
								testingDescription: 'Espresso',
								testingIcon: <EspressoIcon/>,
						}
				case PLATFORMS.CROSS_PLATFORM:
						return {
								...state.resultStatus,
								frameworkDescription: state.userInterestInModernity === '2' ? 'Flutter' : 'React Native',
								frameworkIcon: state.userInterestInModernity === '2' ? <FlutterIcon/> : <ReactIcon/>,
								languageDescription: state.userInterestInModernity === '2' ? 'Dart' : 'Javascript',
								languageIcon: state.userInterestInModernity === '0' ? <DartIcon/> : <JavaScriptIcon/>,
								testingDescription: state.userInterestInModernity === '2' ? 'Flutter Test' : 'Jest',
								testingIcon: state.userInterestInModernity === '2' ? <FlutterIcon/> : <JestIcon/>,
						}
				case PLATFORMS.IOS:
						return {
								...state.resultStatus,
								frameworkDescription: 'iOS',
								frameworkIcon: <IosIcon/>,
								languageDescription: state.userInterestInModernity === '0' ? 'Objective-C' : 'Swift',
								languageIcon: state.userInterestInModernity === '0' ? <ObjectiveCIcon/> : <SwiftIcon/>,
								testingDescription: 'XCTest',
								testingIcon: <XcTestIcon/>,
						}
				default:
						return {...state.resultStatus}
		}
}

const mobileStateReducer = (state, action) => {
		switch (action.type) {
				case MOBILE_ACTIONS.GENERATE_RESULTS:
						return {
								...state,
								pageContent: 'results',
								resultStatus: calculateResultStatus(state)
						}
				case MOBILE_ACTIONS.RESET_PAGE:
						return {
								...state,
								pageContent: 'quiz',
								resultStatus: {
										frameworkDescription: '',
										frameworkIcon: <></>,
										languageDescription: '',
										languageIcon: <></>,
										testingDescription: '',
										testingIcon: <></>,
								}
						}
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