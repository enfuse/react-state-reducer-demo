import {useContext, useReducer} from "react";
import {Typography} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import {AppContext} from "../../App";
import AppLayout from "../../components/AppLayout";
import AppPage from "../../components/AppPage";
import {defaultFrontendState, FRONTEND_ACTIONS, frontendStateReducer} from "./FrontendQuestionnaireState";
import {
  SelectUserExperienceWithFrontend,
  SelectUserInterestInFunctional,
  SelectUserInterestInModernity, SelectUserInterestInOpenSource,
  SelectUserInterestInUpdates
} from "./FrontendRadioGroups"
import SubmitButton from "../../components/SubmitButton";

const FrontendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    const [frontendState, frontendDispatch] = useReducer(frontendStateReducer, defaultFrontendState, undefined);

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
                        <div style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: '2.5%',
                            paddingTop: '2.5%',
                            width: '100%'
                        }}>
                            <Typography
                                color={appTheme.secondary}
                                fontFamily='-apple-system'
                                fontSize='2.5vh'
                                fontWeight='bold'
                            >Frontend</Typography>
                            <SubmitButton
                                buttonIcon={<TaskAltIcon/>}
                                buttonLabel='Submit'
                                isDisabled={false}
                                onClick={() => {
                                  alert('wip')
                                }}
                            />
                        </div>
                        <div>
                            <SelectUserExperienceWithFrontend
                                userExperienceWithFrontend={frontendState.userExperienceWithFrontend}
                                setUserExperienceWithFrontend={(newState) => {
                                    frontendDispatch({
                                        type: FRONTEND_ACTIONS.SET_EXPERIENCE,
                                        value: newState
                                    })
                                }}
                            />
                            <SelectUserInterestInFunctional
                                userInterestInFunctional={frontendState.userInterestInFunctional}
                                setUserInterestInFunctional={(newState) => {
                                    frontendDispatch({
                                        type: FRONTEND_ACTIONS.SET_FUNCTIONAL,
                                        value: newState
                                    })
                                }}
                            />
                            <SelectUserInterestInModernity
                                userInterestInModernity={frontendState.userInterestInModernity}
                                setUserInterestInModernity={(newState) => {
                                    frontendDispatch({
                                        type: FRONTEND_ACTIONS.SET_MODERNITY,
                                        value: newState
                                    })
                                }}
                            />
                            <SelectUserInterestInOpenSource
                                userInterestInOpenSource={frontendState.userInterestInOpenSource}
                                setUserInterestInOpenSource={(newState) => {
                                    frontendDispatch({
                                      type: FRONTEND_ACTIONS.SET_OPEN_SOURCE,
                                      value: newState
                                    })
                                }}
                            />
                            <SelectUserInterestInUpdates
                                userInterestInUpdates={frontendState.userInterestInUpdates}
                                setUserInterestInUpdates={(newState) => {
                                    frontendDispatch({
                                        type: FRONTEND_ACTIONS.SET_UPDATES,
                                        value: newState
                                    })
                                }}
                            />
                        </div>
                    </div>
                </AppPage>
            </AppLayout>
        </>
    )
}

export default FrontendQuestionnaire