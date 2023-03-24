import {createContext, useEffect, useReducer, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";

import BackendQuestionnaire from "./pages/backend/BackendQuestionnaire";
import FrontendQuestionnaire from "./pages/frontend/FrontendQuestionnaire";
import {
  defaultFrontendState,
  FRONTEND_ACTIONS,
  frontendStateReducer
} from "./pages/frontend/FrontendQuestionnaireState";
import HomePage from "./pages/HomePage";
import MobileQuestionnaire from "./pages/mobile/MobileQuestionnaire";
import {defaultMobileState, MOBILE_ACTIONS, mobileStateReducer} from "./pages/mobile/MobileQuestionnaireState";
import SummaryPage from "./pages/SummaryPage";

export const SELECTIONS = Object.freeze({
    NOT_INTERESTED: '0',
    SLIGHTLY_INTERESTED: '1',
    VERY_INTERESTED: '2'
})

export const AppContext = createContext({
    initializeResults: () => {},
    isDarkThemeActive: false,
    setIsDarkThemeActive: (newState) => {},
    darkTheme: {},
    lightTheme: {},
    frontendState: {},
    frontendDispatch: () => {},
    mobileState: {},
    mobileDispatch: () => {},
    pageStyle: {}
})

const App = () => {
    const [isDarkThemeActive, setIsDarkThemeActive] = useState(false)
    const [frontendState, frontendDispatch] = useReducer(frontendStateReducer, defaultFrontendState, undefined)
    const [mobileState, mobileDispatch] = useReducer(mobileStateReducer, defaultMobileState, undefined)
  
    const initializeResults = () => {
        frontendDispatch({
            type: FRONTEND_ACTIONS.RESET_PAGE,
            value: 'Initialize Results'
        })
        mobileDispatch({
            type: MOBILE_ACTIONS.RESET_PAGE,
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
            darkTheme: {
                primary: '#253D5B', // Prussian Blue
                secondary: '#EEF8FF', // Alice Blue
                tertiary: '#3E92CC', // Celestial Blue
            },
            lightTheme: {
                primary: '#EEF8FF', // Alice Blue
                secondary: '#253D5B', // Prussian Blue
                tertiary: '#3E92CC', // Celestial Blue
            },
            frontendState: frontendState,
            frontendDispatch: frontendDispatch,
            mobileState: mobileState,
            mobileDispatch: mobileDispatch,
            pageStyle: {
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1vh',
                height: '100%',
                justifyContent: 'flex-start',
                paddingBottom: '1vh',
                paddingTop: '1vh',
                width: '75%'
            }
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/home'/>}/>
                    <Route path='/backend' element={<BackendQuestionnaire/>}/>
                    <Route path='/frontend' element={<FrontendQuestionnaire/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/mobile' element={<MobileQuestionnaire/>}/>
                    {(frontendState.pageContent === 'results' && mobileState.pageContent === 'results')
                        ? <Route path='/summary' element={<SummaryPage/>}/>
                        : <Route path='/summary' element={<Navigate to='/home'/>}/>
                    }
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App