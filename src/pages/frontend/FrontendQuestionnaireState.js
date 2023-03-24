import {AngularIcon, ReactIcon} from "../../components/FrameworkIcons";
import {JavaScriptIcon, NextJsIcon, SvelteJsIcon, TypescriptIcon, VueJsIcon} from "../../components/LanguageIcons";
import {JasmineIcon, JestIcon, PlaywrightIcon} from "../../components/TestingIcons";

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
                frameworkDescription: state.userInterestInModernity === '0'
                    ? 'An open-source JavaScript framework licensed by MIT, ' +
                    'VueJS is "an approachable, performant and versatile framework for building web user interfaces." ' +
                    'Read more @ https://vuejs.org/'
                    : 'An open-source JavaScript framework licensed by MIT, ' +
                    '"Svelte is a radical new approach to building user interfaces. ' +
                    'Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, ' +
                    'Svelte shifts that work into a compile step that happens when you build your app." ' +
                    'Read more @ https://svelte.dev/',
                frameworkIcon: state.userInterestInModernity === '0' ? <VueJsIcon/> : <SvelteJsIcon/>,
                frameworkTitle: state.userInterestInModernity === '0' ? 'VueJS' : 'Svelte',
                languageDescription: state.userInterestInFunctional === '2'
                    ? 'One of three core technologies (along with CSS and HTML) supporting the World Wide Web, ' +
                    '"JavaScript is a multi-paradigm, dynamic language with ' +
                    'types and operators, standard built-in objects, and methods." ' +
                    'Read more @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview'
                    : 'An open-source programming language maintained by Microsoft, ' +
                    '"TypeScript is a strongly typed programming language that builds on JavaScript, ' +
                    'giving you better tooling at any scale." ' +
                    'Read more @ https://www.typescriptlang.org/',
                languageIcon: state.userInterestInFunctional === '2' ? <JavaScriptIcon/> : <TypescriptIcon/>,
                languageTitle: state.userInterestInFunctional === '2' ? 'JavaScript' : 'Typescript',
                testingDescription:
                    'Built on top of Jasmine and maintained by Meta, ' +
                    '"Jest is a delightful JavaScript Testing Framework with a focus on simplicity." ' +
                    'Read more @ https://jestjs.io/',
                testingIcon: <JestIcon/>,
                testingTitle: 'Jest'
            }
        case EXPERIENCE.SLIGHTLY_EXPERIENCED:
            return {
                ...state.resultStatus,
                frameworkDescription: state.userInterestInModernity === '0'
                    ? 'An open-source web framework maintained by Google, ' +
                    '"Angular is an application-design framework and development platform ' +
                    'for creating efficient and sophisticated single-page apps." ' +
                    'Read more @ https://angular.io/docs'
                    : 'An open-source JavaScript library maintained by Meta, ' +
                    '"React lets you build user interfaces out of individual pieces called components. ' +
                    'Create your own React components [...], then combine them into entire screens, pages, and apps." ' +
                    'Read more @ https://react.dev/',
                frameworkIcon: state.userInterestInModernity === '0' ? <AngularIcon/> : <ReactIcon/>,
                frameworkTitle: state.userInterestInModernity === '0' ? 'Angular' : 'React',
                languageDescription: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? 'One of three core technologies (along with CSS and HTML) supporting the World Wide Web, ' +
                    '"JavaScript is a multi-paradigm, dynamic language with ' +
                    'types and operators, standard built-in objects, and methods." ' +
                    'Read more @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview'
                    : 'An open-source programming language developed and maintained by Microsoft, ' +
                    '"TypeScript is a strongly typed programming language that builds on JavaScript, ' +
                    'giving you better tooling at any scale." ' +
                    'Read more @ https://www.typescriptlang.org/',
                languageIcon: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? <JavaScriptIcon/> : <TypescriptIcon/>,
                languageTitle: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? 'JavaScript' : 'Typescript',
                testingDescription: state.userInterestInModernity === '0'
                    ? 'An open-source testing framework for JavaScript, ' +
                    '"Jasmine is a behavior-driven development framework for testing JavaScript code. ' +
                    'It does not depend on any other JavaScript frameworks, it does not require a DOM, ' +
                    'and it has a clean, obvious syntax so that you can easily write tests." ' +
                    'Read more @ https://jasmine.github.io/'
                    : 'A cross-browser, cross-platform testing framework, ' +
                    '"Playwright enables reliable end-to-end testing for modern web apps." ' +
                    'Read more @ https://playwright.dev/',
                testingIcon: state.userInterestInModernity === '0' ? <JasmineIcon/> : <PlaywrightIcon/>,
                testingTitle: state.userInterestInModernity === '0' ? 'Jasmine' : 'Playwright'
            }
        case EXPERIENCE.VERT_EXPERIENCED:
            return {
                ...state.resultStatus,
                frameworkDescription: state.userInterestInModernity === '2'
                    ? '"Used by some of the world\'s largest companies, Next.js enables you to create ' +
                    'full-stack web applications by extending the latest React features, ' +
                    'and integrating powerful Rust-based JavaScript tooling for the fastest builds." '
                    + 'Read more @ https://nextjs.org/'
                    : 'An open-source JavaScript library maintained by Meta, ' +
                    '"React lets you build user interfaces out of individual pieces called components. ' +
                    'Create your own React components [...], then combine them into entire screens, pages, and apps." ' +
                    'Read more @ https://react.dev/',
                frameworkIcon: state.userInterestInModernity === '2' ? <NextJsIcon/> : <ReactIcon/>,
                frameworkTitle: state.userInterestInModernity === '2' ? 'NextJS' : 'React',
                languageDescription: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? 'One of three core technologies (along with CSS and HTML) supporting the World Wide Web, ' +
                    '"JavaScript is a multi-paradigm, dynamic language with ' +
                    'types and operators, standard built-in objects, and methods." ' +
                    'Read more @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview'
                    : 'An open-source programming language developed and maintained by Microsoft, ' +
                    '"TypeScript is a strongly typed programming language that builds on JavaScript, ' +
                    'giving you better tooling at any scale." ' +
                    'Read more @ https://www.typescriptlang.org/',
                languageIcon: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? <JavaScriptIcon/> : <TypescriptIcon/>,
                languageTitle: (state.userInterestInFunctional === '1' || state.userInterestInFunctional === '2')
                    ? 'JavaScript' : 'Typescript',
                testingDescription:
                    'A cross-browser, cross-platform testing framework, ' +
                    '"Playwright enables reliable end-to-end testing for modern web apps." ' +
                    'Read more @ https://playwright.dev/',
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