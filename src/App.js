import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import BackendQuestionnaire from "./pages/BackendQuestionnaire";
import FrontendQuestionnaire from "./pages/FrontendQuestionnaire";
import Home from "./pages/Home";
import MobileQuestionnaire from "./pages/MobileQuestionnaire";

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
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/mobile"} element={<MobileQuestionnaire/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App