import {useContext} from "react";
import {Typography} from "@mui/material";

import {AppContext} from "../App";
import AppPage from "../components/AppPage";
import AppLayout from "../components/AppLayout";

const MobileQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <>
            <AppLayout>
                <AppPage>
                    <div style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1vh',
                        justifyContent: 'center',
                        paddingBottom: '1vh',
                        paddingTop: '1vh',
                        width: '75%'
                    }}>
                        <Typography
                            color={appTheme.secondary}
                            fontFamily='-apple-system'
                            fontSize='2.5vh'
                            fontWeight='bold'
                        >Mobile</Typography>
                    </div>
                </AppPage>
            </AppLayout>
        </>
    )
}

export default MobileQuestionnaire