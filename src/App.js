import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import BackendQuestionnaire from "./pages/backend/BackendQuestionnaire";
import FrontendQuestionnaire from "./pages/frontend/FrontendQuestionnaire";
import HomePage from "./pages/HomePage";
import MobileQuestionnaire from "./pages/mobile/MobileQuestionnaire";

export const SELECTIONS = Object.freeze({
  NOT_INTERESTED: 0,
  SLIGHTLY_INTERESTED: 1,
  VERY_INTERESTED: 2
})

export const AppContext = createContext({
    isDarkThemeActive: false,
    setIsDarkThemeActive: (newState) => {},
    darkTheme: {},
    lightTheme: {}
})

const App = () => {
    const [isDarkThemeActive, setIsDarkThemeActive] = useState(false)

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
            }
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/home"}/>}/>
                    <Route path={"/backend"} element={<BackendQuestionnaire/>}/>
                    <Route path={"/frontend"} element={<FrontendQuestionnaire/>}/>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/mobile"} element={<MobileQuestionnaire/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App