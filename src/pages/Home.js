import {useContext} from "react";
import {AppContext} from "../App";
import AppSidebar from "../components/AppSidebar";
import {Paper} from "@mui/material";

const Home = () => {
    let appContext = useContext(AppContext)
    let darkTheme = appContext.darkTheme
    let lightTheme = appContext.lightTheme

    return (
        <>
            <AppSidebar/>
            <Paper>
                <div>
                    Home
                </div>
            </Paper>
        </>
    )
}

export default Home