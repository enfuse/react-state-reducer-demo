import {useContext, useReducer} from "react";
import {frontendStateReducer} from "./FrontendQuestionnaireState";
import AppLayout from "../components/AppLayout";
import {Card, Typography} from "@mui/material";
import {AppContext} from "../App";

const FrontendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    const [frontendState, frontendDispatch] = useReducer(frontendStateReducer, {}, undefined);

    return (
        <>
            <AppLayout>
                <Card elevation={1} sx={{
                    alignItems: 'center',
                    backgroundColor: appTheme.tertiary,
                    color: appTheme.tertiary,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'flex-start',
                    outlineColor: appTheme.secondary,
                    outlineWidth: '1px',
                    width: '100%'
                }}>
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
                </Card>

            </AppLayout>
        </>
    )
}

export default FrontendQuestionnaire