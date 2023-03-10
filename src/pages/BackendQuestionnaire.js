import AppLayout from "../components/AppLayout";
import {Typography} from "@mui/material";
import {useContext} from "react";
import {AppContext} from "../App";
import AppCard from "../components/AppCard";

const BackendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <>
            <AppLayout>
                <AppCard>
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
                        >Backend</Typography>
                    </div>
                </AppCard>
            </AppLayout>
        </>
    )
}

export default BackendQuestionnaire