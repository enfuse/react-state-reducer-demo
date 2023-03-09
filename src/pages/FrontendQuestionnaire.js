import {useContext, useReducer} from "react";
import {frontendStateReducer} from "./FrontendQuestionnaireState";
import AppLayout from "../components/AppLayout";
import {Card, Typography} from "@mui/material";
import {AppContext} from "../App";
import AppCard from "../components/AppCard";

const FrontendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    const [frontendState, frontendDispatch] = useReducer(frontendStateReducer, {}, undefined);

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
                            Frontend
                        </Typography>
                    </div>
                </AppCard>
            </AppLayout>
        </>
    )
}

export default FrontendQuestionnaire