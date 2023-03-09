import AppLayout from "../components/AppLayout";
import {Card, Typography} from "@mui/material";
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
                        display: 'flex',
                        height: '10%',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <Typography color={appTheme.secondary} fontSize='24px' fontWeight='bold'>
                            Backend
                        </Typography>
                    </div>
                </AppCard>
            </AppLayout>
        </>
    )
}

export default BackendQuestionnaire