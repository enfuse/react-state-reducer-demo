import {createContext, useReducer, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import BackendQuestionnaire from "./pages/backend/BackendQuestionnaire";
import FrontendQuestionnaire from "./pages/frontend/FrontendQuestionnaire";
import {defaultFrontendState, frontendStateReducer} from "./pages/frontend/FrontendQuestionnaireState";
import HomePage from "./pages/HomePage";
import MobileQuestionnaire from "./pages/mobile/MobileQuestionnaire";
import {defaultMobileState, mobileStateReducer} from "./pages/mobile/MobileQuestionnaireState";
import SummaryPage from "./pages/SummaryPage";

export const SELECTIONS = Object.freeze({
    NOT_INTERESTED: '0',
    SLIGHTLY_INTERESTED: '1',
    VERY_INTERESTED: '2'
})

export const AppContext = createContext({
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
  
    return (
        <AppContext.Provider value={{
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
                    <Route path='/summary' element={<SummaryPage/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App