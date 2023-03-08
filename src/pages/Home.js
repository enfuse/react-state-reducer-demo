import {useContext} from "react";
import {AppContext} from "../App";
import AppLayout from "../components/AppLayout";
import {Paper} from "@mui/material";

const Home = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <>
            <AppLayout/>
            <Paper>
                <div>
                    Home
                </div>
            </Paper>
        </>
    )
}

export default Home