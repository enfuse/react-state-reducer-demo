import {useContext} from "react";
import {Typography} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import {AppContext} from "../../App";
import AppPage from "../../components/AppPage";
import AppLayout from "../../components/AppLayout";
import {MOBILE_ACTIONS} from "./MobileQuestionnaireState";
import {
    SelectUserInterestInFunctional,
    SelectUserInterestInModernity,
    SelectUserInterestInOpenSource,
    SelectUserInterestInSingleLanguage,
    SelectUserPlatformPreference
} from "./MobileRadioGroups";
import ResultCard from "../../components/ResultCard";
import SubmitButton from "../../components/SubmitButton";

const MobileQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    let mobileState = appContext.mobileState
    let mobileDispatch = appContext.mobileDispatch
    
    const generateResults = (event) => {
        event.preventDefault()
        mobileDispatch({
            type: MOBILE_ACTIONS.GENERATE_RESULTS,
            value: 'Generate Results'
        })
    }
    
    const resetPage = (event) => {
        event.preventDefault()
        mobileDispatch({
            type: MOBILE_ACTIONS.RESET_PAGE,
            value: 'Reset Page'
        })
    }

    return (
        <>
            <AppLayout>
                <AppPage>
                    <div style={appContext.pageStyle}>
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
                                Mobile
                            </Typography>
                            {mobileState.pageContent === 'quiz'
                                ? <SubmitButton
                                    buttonIcon={<TaskAltIcon/>}
                                    buttonLabel='Submit'
                                    isDisabled={false}
                                    onClick={generateResults}
                                />
                                : <SubmitButton
                                    buttonIcon={<RestartAltIcon/>}
                                    buttonLabel='Try Again'
                                    isDisabled={mobileState.pageContent === 'quiz'}
                                    onClick={resetPage}
                                />
                            }
                        </div>
                        {mobileState.pageContent === 'quiz'
                            ? <div>
                                <SelectUserInterestInFunctional
                                    userInterestInFunctional={mobileState.userInterestInFunctional}
                                    setUserInterestInFunctional={(newState) => {
                                        mobileDispatch({
                                            type: MOBILE_ACTIONS.SET_FUNCTIONAL,
                                            value: newState
                                        })
                                    }}
                                />
                                <SelectUserInterestInModernity
                                    userInterestInModernity={mobileState.userInterestInModernity}
                                    setUserInterestInModernity={(newState) => {
                                        mobileDispatch({
                                            type: MOBILE_ACTIONS.SET_MODERNITY,
                                            value: newState
                                        })
                                    }}
                                />
                                <SelectUserInterestInOpenSource
                                    userInterestInOpenSource={mobileState.userInterestInOpenSource}
                                    setUserInterestInOpenSource={(newState) => {
                                        mobileDispatch({
                                            type: MOBILE_ACTIONS.SET_OPEN_SOURCE,
                                            value: newState
                                        })
                                    }}
                                />
                                <SelectUserInterestInSingleLanguage
                                    userInterestInSingleLanguage={mobileState.userInterestInSingleLanguage}
                                    setUserInterestInSingleLanguage={(newState) => {
                                        mobileDispatch({
                                            type: MOBILE_ACTIONS.SET_SINGLE_LANGUAGE,
                                            value: newState
                                        })
                                    }}
                                />
                                <SelectUserPlatformPreference
                                    userPlatformPreference={mobileState.userPlatformPreference}
                                    setUserPlatformPreference={(newState) => {
                                        mobileDispatch({
                                          type: MOBILE_ACTIONS.SET_PLATFORM,
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
                                    {mobileState.resultStatus.frameworkIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {mobileState.resultStatus.frameworkDescription}
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
                                        {mobileState.resultStatus.languageIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {mobileState.resultStatus.languageDescription}
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
                                    {mobileState.resultStatus.testingIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {mobileState.resultStatus.testingDescription}
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

export default MobileQuestionnaire