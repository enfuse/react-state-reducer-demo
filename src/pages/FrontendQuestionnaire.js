import {useContext, useReducer} from "react";
import {Typography} from "@mui/material";

import {AppContext} from "../App";
import AppCard from "../components/AppCard";
import AppLayout from "../components/AppLayout";
import {frontendStateReducer} from "./FrontendQuestionnaireState";

const FrontendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    const [frontendState, frontendDispatch] = useReducer(frontendStateReducer, {}, undefined);

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
                        >Frontend</Typography>
                    </div>
                </AppCard>
            </AppLayout>
        </>
    )
}

export default FrontendQuestionnaire