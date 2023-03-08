import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {createContext} from "react";
import Home from "./pages/Home";

let defaultContext = {
    darkTheme: {
        primary: '#253D5B', // Prussian Blue
        secondary: '#DD7373', // Light Coral
        tertiary: '#EEF8FF', // Alice Blue
    },
    lightTheme: {
        primary: '#EEF8FF', // Alice Blue
        secondary: '#3C91E6', // Tufts Blue
        tertiary: '#253D5B', // Prussian Blue
    }
}

export const AppContext = createContext(defaultContext)

const App = () => {
    return (
        <AppContext.Provider value={defaultContext}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/home"}/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App