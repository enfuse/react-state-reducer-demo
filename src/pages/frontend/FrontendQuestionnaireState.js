import {JavaScriptIcon, NextJsIcon, SvelteJsIcon, TypescriptIcon, VueJsIcon} from "../../components/LanguageIcons";
import {JasmineIcon, JestIcon, PlaywrightIcon} from "../../components/TestingIcons";
import {AngularIcon, ReactIcon} from "../../components/FrameworkIcons";

export const EXPERIENCE = Object.freeze({
    NOT_EXPERIENCED: '0',
    SLIGHTLY_EXPERIENCED: '1',
    VERT_EXPERIENCED: '2'
})

const SELECTIONS = Object.freeze({
    NOT_INTERESTED: '0',
    SLIGHTLY_INTERESTED: '1',
    VERY_INTERESTED: '2'
})

const defaultFrontendState = {
    pageContent: 'quiz',
    resultStatus: {
        frameworkDescription: '',
        frameworkIcon: <></>,
        languageDescription: '',
        languageIcon: <></>,
        testingDescription: '',
        testingIcon: <></>,
    },
    userExperienceWithFrontend: EXPERIENCE.NOT_EXPERIENCED,
    userInterestInFunctional: SELECTIONS.NOT_INTERESTED,
    userInterestInModernity: SELECTIONS.NOT_INTERESTED,
    userInterestInOpenSource: SELECTIONS.NOT_INTERESTED,
    userInterestInUpdates: SELECTIONS.NOT_INTERESTED
}

const FRONTEND_ACTIONS = Object.freeze({
    GENERATE_RESULTS: 0,
    RESET_PAGE: 1,
    SET_EXPERIENCE: 2,
    SET_FUNCTIONAL: 3,
    SET_OPEN_SOURCE: 4,
    SET_MODERNITY: 5,
    SET_UPDATES: 6
})

const calculateResultStatus = (state) => {
    switch (state.userExperienceWithFrontend) {
        case EXPERIENCE.NOT_EXPERIENCED:
            return {
                ...state.resultStatus,
                frameworkDescription: state.userInterestInModernity === '0' ? 'VueJS' : 'Svelte',
                frameworkIcon: state.userInterestInModernity === '0' ? <VueJsIcon/> : <SvelteJsIcon/>,
                languageDescription: state.userInterestInFunctional === '2' ? 'Javascript' : 'Typescript',
                languageIcon: state.userInterestInFunctional === '2' ? <JavaScriptIcon/> : <TypescriptIcon/>,
                testingDescription: 'Jest',
                testingIcon: <JestIcon/>
            }
        case EXPERIENCE.SLIGHTLY_EXPERIENCED:
            return {
                ...state.resultStatus,
                frameworkDescription: state.userInterestInModernity === '0' ? 'Angular' : 'React',
                frameworkIcon: state.userInterestInModernity === '0' ? <AngularIcon/> : <ReactIcon/>,
                languageDescription: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2') ? 'Javascript' : 'Typescript',
                languageIcon: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2') ? <JavaScriptIcon/> : <TypescriptIcon/>,
                testingDescription: state.userInterestInModernity === '0' ? 'Jasmine' : 'Playwright',
                testingIcon: state.userInterestInModernity === '0' ? <JasmineIcon/> : <PlaywrightIcon/>
            }
        case EXPERIENCE.VERT_EXPERIENCED:
            return {
                ...state.resultStatus,
                frameworkDescription: state.userInterestInModernity === '2' ? 'NextJS' : 'React',
                frameworkIcon: state.userInterestInModernity === '2' ? <NextJsIcon/> : <ReactIcon/>,
                languageDescription: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2') ? 'Javascript' : 'Typescript',
                languageIcon: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2') ? <JavaScriptIcon/> : <TypescriptIcon/>,
                testingDescription: 'Playwright',
                testingIcon: <PlaywrightIcon/>
            }
        default:
            return {...state}
    }
}

const frontendStateReducer = (state, action) => {
    switch (action.type) {
        case FRONTEND_ACTIONS.GENERATE_RESULTS:
            return {
                ...state,
                pageContent: 'results',
                resultStatus: calculateResultStatus(state)
            }
        case FRONTEND_ACTIONS.RESET_PAGE:
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