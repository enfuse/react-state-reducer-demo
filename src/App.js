import {createContext, useEffect, useReducer, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {
    appThemeDark,
    appThemeLight,
    pageStyle,
    pageBodyStyle,
    pageHeaderStyle,
    resultStyle,
    resultDescriptionStyle,
    resultItemStyle
} from "./App.style";
import BackendQuestionnaire, {defaultBackendState} from "./pages/backend/BackendQuestionnaire";
import FrontendQuestionnaire from "./pages/frontend/FrontendQuestionnaire";
import {
    defaultFrontendState,
    FRONTEND_ACTIONS,
    frontendStateReducer
} from "./pages/frontend/FrontendQuestionnaireState";
import HomePage from "./pages/HomePage";
import MobileQuestionnaire from "./pages/mobile/MobileQuestionnaire";
import {
    defaultMobileState,
    MOBILE_ACTIONS,
    mobileStateReducer
} from "./pages/mobile/MobileQuestionnaireState";
import SummaryPage from "./pages/SummaryPage";

export const SELECTIONS = Object.freeze({
    NOT_INTERESTED: '0',
    SLIGHTLY_INTERESTED: '1',
    VERY_INTERESTED: '2'
})

export const AppContext = createContext({
    appThemeDark: {},
    appThemeLight: {},
    backendState: {},
    setBackendState: (newState) => {},
    frontendState: {},
    frontendDispatch: () => {},
    initializeResults: () => {},
    isDarkThemeActive: false,
    setIsDarkThemeActive: (newState) => {},
    mobileState: {},
    mobileDispatch: () => {},
    pageStyle: {},
    pageBodyStyle: {},
    pageHeaderStyle: {},
    resultStyle: {},
    resultDescriptionStyle: {},
    resultItemStyle: {}
})

const App = () => {
    const [isDarkThemeActive, setIsDarkThemeActive] = useState(false)
    const [backendState, setBackendState] = useState(defaultBackendState)
    const [frontendState, frontendDispatch] = useReducer(frontendStateReducer, defaultFrontendState)
    const [mobileState, mobileDispatch] = useReducer(mobileStateReducer, defaultMobileState)
  
    const initializeResults = () => {
        setBackendState(defaultBackendState)
        frontendDispatch({
            type: FRONTEND_ACTIONS.INITIALIZE,
            value: 'Initialize Results'
        })
        mobileDispatch({
            type: MOBILE_ACTIONS.INITIALIZE,
            value: 'Initialize Results'
        })
    }
  
    useEffect(() => {
        initializeResults()
    }, [])
  
    return (
        <AppContext.Provider value={{
            initializeResults: initializeResults,
            isDarkThemeActive: isDarkThemeActive,
            setIsDarkThemeActive: setIsDarkThemeActive,
            appThemeDark: appThemeDark,
            appThemeLight: appThemeLight,
            backendState: backendState,
            setBackendState: setBackendState,
            frontendState: frontendState,
            frontendDispatch: frontendDispatch,
            mobileState: mobileState,
            mobileDispatch: mobileDispatch,
            pageStyle: pageStyle,
            pageBodyStyle: pageBodyStyle,
            pageHeaderStyle: pageHeaderStyle,
            resultStyle: resultStyle,
            resultDescriptionStyle: resultDescriptionStyle,
            resultItemStyle: resultItemStyle
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/home'/>}/>
                    <Route path='/backend' element={<BackendQuestionnaire/>}/>
                    <Route path='/frontend' element={<FrontendQuestionnaire/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/mobile' element={<MobileQuestionnaire/>}/>
                    {(backendState.pageContent === 'results' && frontendState.pageContent === 'results' && mobileState.pageContent === 'results')
                        ? <Route path='/summary' element={<SummaryPage/>}/>
                        : <Route path='/summary' element={<Navigate to='/home'/>}/>
                    }
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App