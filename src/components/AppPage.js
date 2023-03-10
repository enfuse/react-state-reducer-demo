import {useContext} from "react";
import {Card} from "@mui/material";

import {AppContext} from "../App";

const AppPage = ({children}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <Card elevation={5} sx={{
            alignItems: 'center',
            backgroundColor: appTheme.primary,
            border: 'solid ' + appTheme.tertiary,
            borderWidth: '1vh',
            color: appTheme.primary,
            display: 'flex',
            flexDirection: 'column',
            height: '99%',
            justifyContent: 'flex-start',
            width: '99%'
        }}>{children}</Card>
    )
}

export default AppPage