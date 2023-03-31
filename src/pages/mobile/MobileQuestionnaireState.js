import {AndroidIcon, DartIcon, FlutterIcon, IosIcon, ReactIcon} from "../../components/FrameworkIcons";
import {JavaIcon, JavaScriptIcon, KotlinIcon, ObjectiveCIcon, SwiftIcon} from "../../components/LanguageIcons";
import {EspressoIcon, JestIcon, XcTestIcon} from "../../components/TestingIcons";
import {
	androidDescription,
	dartDescription,
	espressoDescription,
	flutterDescription,
	flutterTestDescription,
	iosDescription,
	javaDescription,
	javascriptDescription,
	jestDescription,
	kotlinDescription,
	objCDescription,
	reactNativeDescription,
	swiftDescription,
	xcTestDescription
} from "../../components/ToolDescriptions";

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
		frameworkTitle: '',
		languageDescription: '',
		languageIcon: <></>,
		languageTitle: '',
		testingDescription: '',
		testingIcon: <></>,
		testingTitle: ''
	},
	userInterestInFunctional: SELECTIONS.NOT_INTERESTED,
	userInterestInModernity: SELECTIONS.NOT_INTERESTED,
	userInterestInOpenSource: SELECTIONS.NOT_INTERESTED,
	userInterestInSingleLanguage: SELECTIONS.NOT_INTERESTED,
	userPlatformPreference: PLATFORMS.ANDROID
}

const MOBILE_ACTIONS = Object.freeze({
	GENERATE_RESULTS: 0,
	INITIALIZE: 1,
	RESET_PAGE: 2,
	SET_FUNCTIONAL: 3,
	SET_MODERNITY: 4,
	SET_OPEN_SOURCE: 5,
	SET_SINGLE_LANGUAGE: 6,
	SET_PLATFORM: 7
})

const calculateResultStatus = (state) => {
	switch (state.userPlatformPreference) {
		case PLATFORMS.ANDROID:
			return {
				...state.resultStatus,
				frameworkDescription: androidDescription,
				frameworkIcon: <AndroidIcon/>,
				frameworkTitle: 'Android',
				languageDescription: state.userInterestInModernity === '0' ? javaDescription : kotlinDescription,
				languageIcon: state.userInterestInModernity === '0' ? <JavaIcon/> : <KotlinIcon/>,
				languageTitle: state.userInterestInModernity === '0' ? 'Java' : 'Kotlin',
				testingDescription: espressoDescription,
				testingIcon: <EspressoIcon/>,
				testingTitle: 'Espresso'
			}
		case PLATFORMS.CROSS_PLATFORM:
			return {
				...state.resultStatus,
				frameworkDescription: state.userInterestInModernity === '2' ? flutterDescription : reactNativeDescription,
				frameworkIcon: state.userInterestInModernity === '2' ? <FlutterIcon/> : <ReactIcon/>,
				frameworkTitle: state.userInterestInModernity === '2' ? 'Flutter' : 'React Native',
				languageDescription: state.userInterestInModernity === '2' ? dartDescription : javascriptDescription,
				languageIcon: state.userInterestInModernity === '2' ? <DartIcon/> : <JavaScriptIcon/>,
				languageTitle: state.userInterestInModernity === '2' ? 'Dart' : 'JavaScript',
				testingDescription: state.userInterestInModernity === '2' ? flutterTestDescription : jestDescription,
				testingIcon: state.userInterestInModernity === '2' ? <FlutterIcon/> : <JestIcon/>,
				testingTitle: state.userInterestInModernity === '2' ? 'flutter test' : 'Jest'
			}
		case PLATFORMS.IOS:
			return {
				...state.resultStatus,
				frameworkDescription: iosDescription,
				frameworkIcon: <IosIcon/>,
				frameworkTitle: 'iOS',
				languageDescription: state.userInterestInModernity === '0' ? objCDescription : swiftDescription,
				languageIcon: state.userInterestInModernity === '0' ? <ObjectiveCIcon/> : <SwiftIcon/>,
				languageTitle: state.userInterestInModernity === '0' ? 'Objective-C' : 'Swift',
				testingDescription: xcTestDescription,
				testingIcon: <XcTestIcon/>,
				testingTitle: 'XCTest'
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
		case MOBILE_ACTIONS.INITIALIZE:
			return defaultMobileState
		case MOBILE_ACTIONS.RESET_PAGE:
			return {
				...state,
				pageContent: 'quiz',
				resultStatus: {
					frameworkDescription: '',
					frameworkIcon: <></>,
					frameworkTitle: '',
					languageDescription: '',
					languageIcon: <></>,
					languageTitle: '',
					testingDescription: '',
					testingIcon: <></>,
					testingTitle: ''
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