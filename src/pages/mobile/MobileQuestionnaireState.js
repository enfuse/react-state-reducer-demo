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
				frameworkDescription:
					'Developed and maintained by Google, the Android development platform enables developers ' +
					'to deploy mobile applications to any compatible Android device. Jetpack Compose is the toolkit ' +
					'recommended by the Android team for modern mobile applications. ' +
					'Read more @ https://developer.android.com/about',
				frameworkIcon: <AndroidIcon/>,
				frameworkTitle: 'Android',
				languageDescription: state.userInterestInModernity === '0'
					? 'Developed and maintained by JetBrains (IntelliJ, PyCharm), ' +
					'"Kotlin is a modern but already mature programming language aimed to make developers happier. ' +
					'It\'s concise, safe, interoperable with Java and other languages, and ' +
					'provides many ways to reuse code between multiple platforms for productive programming." ' +
					'Read more @ https://kotlinlang.org/docs/getting-started.html'
					: 'Developed and maintained by Oracle (originally Sun Microsystems), ' +
					'"the Java™ Programming Language is a general-purpose, concurrent, strongly typed, ' +
					'class-based object-oriented language." ' +
					'Read more @ https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html',
				languageIcon: state.userInterestInModernity === '0' ? <JavaIcon/> : <KotlinIcon/>,
				languageTitle: state.userInterestInModernity === '0' ? 'Java' : 'Kotlin',
				testingDescription:
					'Developed and maintained by Google, the Espresso test framework allows you to ' +
					'"write concise, beautiful, and reliable Android UI tests." ' +
					'Read more @ https://developer.android.com/training/testing/espresso',
				testingIcon: <EspressoIcon/>,
				testingTitle: 'Espresso'
			}
		case PLATFORMS.CROSS_PLATFORM:
			return {
				...state.resultStatus,
				frameworkDescription: state.userInterestInModernity === '2'
					? '"Flutter is an open source framework by Google for building beautiful, natively compiled, ' +
					'multi-platform applications from a single codebase." ' +
					'Read more @ https://flutter.dev/'
					: 'Written in JavaScript and rendered with native code, React Native allows you to ' +
					'"Create native apps for Android, iOS, and more using React." ' +
					'Read more @ https://reactnative.dev/',
				frameworkIcon: state.userInterestInModernity === '2' ? <FlutterIcon/> : <ReactIcon/>,
				frameworkTitle: state.userInterestInModernity === '2' ? 'Flutter' : 'React Native',
				languageDescription: state.userInterestInModernity === '2'
					? 'An open-source programming language maintained by Google, "Dart is ' +
					'a client-optimized language for developing fast apps on any platform." ' +
					'Read more @ https://dart.dev/overview'
					: 'One of three core technologies (along with CSS and HTML) supporting the World Wide Web, ' +
					'"JavaScript is a multi-paradigm, dynamic language with ' +
					'types and operators, standard built-in objects, and methods." ' +
					'Read more @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview',
				languageIcon: state.userInterestInModernity === '2' ? <DartIcon/> : <JavaScriptIcon/>,
				languageTitle: state.userInterestInModernity === '2' ? 'Dart' : 'JavaScript',
				testingDescription: state.userInterestInModernity === '2'
					? 'Developed and maintained by the Flutter team, the flutter test library ' +
					'is the preferred testing method for Flutter apps. ' +
					'Read more @ https://docs.flutter.dev/testing'
					: 'Built on top of Jasmine and maintained by Meta, ' +
					'"Jest is a delightful JavaScript Testing Framework with a focus on simplicity." ' +
					'Read more @ https://jestjs.io/',
				testingIcon: state.userInterestInModernity === '2' ? <FlutterIcon/> : <JestIcon/>,
				testingTitle: state.userInterestInModernity === '2' ? 'flutter test' : 'Jest'
			}
		case PLATFORMS.IOS:
			return {
				...state.resultStatus,
				frameworkDescription:
					'Developed and maintained by Apple, "iOS is the world’s most advanced mobile operating system." ' +
					'Using the development kits for iOS, iPadOS, macOS, tvOS, and watchOS, mobile applications ' +
					'can be deployed to any compatible Apple device. ' +
					'Read more @ https://developer.apple.com/ios/',
				frameworkIcon: <IosIcon/>,
				frameworkTitle: 'iOS',
				languageDescription: state.userInterestInModernity === '0'
					? 'Objective-C is an object-oriented programming language that was the standard language ' +
					'used and supported by Apple until the release of Swift in 2014. XCode is the development environment ' +
					'recommended by Apple for all iOS applications.' +
					'Read more @ https://developer.apple.com/documentation/objectivec/'
					: '"Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. ' +
					'Swift code is safe by design and produces software that runs lightning-fast." ' +
					'XCode is the development environment recommended by Apple for all iOS applications. ' +
					'Read more @ https://developer.apple.com/swift/',
				languageIcon: state.userInterestInModernity === '0' ? <ObjectiveCIcon/> : <SwiftIcon/>,
				languageTitle: state.userInterestInModernity === '0' ? 'Objective-C' : 'Swift',
				testingDescription:
					'Developed and maintained by Apple, the XCTest framework allows you to ' +
					'"write unit tests for your Xcode projects that integrate seamlessly with Xcode’s testing workflow."' +
					'Read more @ https://developer.apple.com/documentation/xctest',
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