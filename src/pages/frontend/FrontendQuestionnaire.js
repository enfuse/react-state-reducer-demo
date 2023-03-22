import {useContext, useEffect, useReducer} from "react";
import {Typography} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
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
import ResultCard from "../../components/ResultCard";
import IconFrame from "../../components/IconFrame";

const FrontendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    const [frontendState, frontendDispatch] = useReducer(frontendStateReducer, defaultFrontendState, undefined);
    
    useEffect(() => {
        console.log(frontendState)
    }, [frontendState])
    
    const generateResults = (event) => {
        event.preventDefault()
        frontendDispatch({
            type: FRONTEND_ACTIONS.GENERATE_RESULTS,
            value: 'Generate Results'
        })
    }
    
    const resetPage = (event) => {
        event.preventDefault()
        frontendDispatch({
            type: FRONTEND_ACTIONS.RESET_PAGE,
            value: 'Reset Page'
        })
    }

    return (
        <>
            <AppLayout>
                <AppPage>
                    <div style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1vh',
                        height: '100%',
                        justifyContent: 'flex-start',
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
                            >
                              Frontend
                            </Typography>
                            {frontendState.pageContent === 'quiz'
                                ? <SubmitButton
                                    buttonIcon={<TaskAltIcon/>}
                                    buttonLabel='Submit'
                                    isDisabled={false}
                                    onClick={generateResults}
                                />
                                : <SubmitButton
                                    buttonIcon={<RestartAltIcon/>}
                                    buttonLabel='Try Again'
                                    isDisabled={frontendState.pageContent === 'quiz'}
                                    onClick={resetPage}
                                />
                            }
                        </div>
                        {frontendState.pageContent === 'quiz'
                            ? <div>
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
                            : <div style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '80%',
                                justifyContent: 'flex-start',
                                width: '100%'
                            }}>
                                <ResultCard>
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        Framework
                                    </Typography>
                                    {frontendState.resultStatus.frameworkIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {frontendState.resultStatus.frameworkDescription}
                                    </Typography>
                                </ResultCard>
                                <ResultCard>
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        Language
                                    </Typography>
                                    <IconFrame icon={frontendState.resultStatus.languageIcon}/>
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {frontendState.resultStatus.languageDescription}
                                    </Typography>
                                </ResultCard>
                                <ResultCard>
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        Testing
                                    </Typography>
                                    <IconFrame icon={frontendState.resultStatus.testingIcon}/>
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                      {frontendState.resultStatus.testingDescription}
                                    </Typography>
                                </ResultCard>
                            </div>
                        }
                    </div>
                </AppPage>
            </AppLayout>
        </>
    )
}

export default FrontendQuestionnaire