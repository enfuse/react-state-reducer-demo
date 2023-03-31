import {AngularIcon, ReactIcon} from "../../components/FrameworkIcons";
import {JavaScriptIcon, NextJsIcon, SvelteJsIcon, TypescriptIcon, VueJsIcon} from "../../components/LanguageIcons";
import {JasmineIcon, JestIcon, PlaywrightIcon} from "../../components/TestingIcons";
import {
    angularJsDescription,
    jasmineDescription,
    javascriptDescription,
    jestDescription,
    nextJsDescription,
    playwrightDescription,
    reactJsDescription,
    svelteDescription,
    typescriptDescription,
    vueJsDescription
} from "../../components/ToolDescriptions";

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
        frameworkTitle: '',
        languageDescription: '',
        languageIcon: <></>,
        languageTitle: '',
        testingDescription: '',
        testingIcon: <></>,
        testingTitle: ''
    },
    userExperienceWithFrontend: EXPERIENCE.NOT_EXPERIENCED,
    userInterestInFunctional: SELECTIONS.NOT_INTERESTED,
    userInterestInModernity: SELECTIONS.NOT_INTERESTED,
    userInterestInOpenSource: SELECTIONS.NOT_INTERESTED,
    userInterestInUpdates: SELECTIONS.NOT_INTERESTED
}

const FRONTEND_ACTIONS = Object.freeze({
    GENERATE_RESULTS: 0,
    INITIALIZE: 1,
    RESET_PAGE: 2,
    SET_EXPERIENCE: 3,
    SET_FUNCTIONAL: 4,
    SET_OPEN_SOURCE: 5,
    SET_MODERNITY: 6,
    SET_UPDATES: 7
})

const calculateResultStatus = (state) => {
    switch (state.userExperienceWithFrontend) {
        case EXPERIENCE.NOT_EXPERIENCED:
            return {
                ...state.resultStatus,
                frameworkDescription: state.userInterestInModernity === '0' ? vueJsDescription : svelteDescription,
                frameworkIcon: state.userInterestInModernity === '0' ? <VueJsIcon/> : <SvelteJsIcon/>,
                frameworkTitle: state.userInterestInModernity === '0' ? 'VueJS' : 'Svelte',
                languageDescription: state.userInterestInFunctional === '2'
                    ? javascriptDescription : typescriptDescription,
                languageIcon: state.userInterestInFunctional === '2' ? <JavaScriptIcon/> : <TypescriptIcon/>,
                languageTitle: state.userInterestInFunctional === '2' ? 'JavaScript' : 'Typescript',
                testingDescription: jestDescription,
                testingIcon: <JestIcon/>,
                testingTitle: 'Jest'
            }
        case EXPERIENCE.SLIGHTLY_EXPERIENCED:
            return {
                ...state.resultStatus,
                frameworkDescription: state.userInterestInModernity === '0'
                    ? angularJsDescription : reactJsDescription,
                frameworkIcon: state.userInterestInModernity === '0' ? <AngularIcon/> : <ReactIcon/>,
                frameworkTitle: state.userInterestInModernity === '0' ? 'Angular' : 'React',
                languageDescription: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? javascriptDescription : typescriptDescription,
                languageIcon: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? <JavaScriptIcon/> : <TypescriptIcon/>,
                languageTitle: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? 'JavaScript' : 'Typescript',
                testingDescription: state.userInterestInModernity === '0' ? jasmineDescription : playwrightDescription,
                testingIcon: state.userInterestInModernity === '0' ? <JasmineIcon/> : <PlaywrightIcon/>,
                testingTitle: state.userInterestInModernity === '0' ? 'Jasmine' : 'Playwright'
            }
        case EXPERIENCE.VERT_EXPERIENCED:
            return {
                ...state.resultStatus,
                frameworkDescription: state.userInterestInModernity === '2' ? nextJsDescription : reactJsDescription,
                frameworkIcon: state.userInterestInModernity === '2' ? <NextJsIcon/> : <ReactIcon/>,
                frameworkTitle: state.userInterestInModernity === '2' ? 'NextJS' : 'React',
                languageDescription: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? javascriptDescription : typescriptDescription,
                languageIcon: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? <JavaScriptIcon/> : <TypescriptIcon/>,
                languageTitle: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? 'JavaScript' : 'Typescript',
                testingDescription: playwrightDescription,
                testingIcon: <PlaywrightIcon/>,
                testingTitle: 'Playwright'
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
        case FRONTEND_ACTIONS.INITIALIZE:
            return defaultFrontendState
        case FRONTEND_ACTIONS.RESET_PAGE:
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