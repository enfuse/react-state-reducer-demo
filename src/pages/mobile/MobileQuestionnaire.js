import {useContext, useReducer} from "react";
import {Typography} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import {AppContext} from "../../App";
import AppPage from "../../components/AppPage";
import AppLayout from "../../components/AppLayout";
import {defaultMobileState, MOBILE_ACTIONS, mobileStateReducer} from "./MobileQuestionnaireState";
import SubmitButton from "../../components/SubmitButton";
import {
    SelectUserInterestInFunctional,
    SelectUserInterestInModernity, SelectUserInterestInOpenSource, SelectUserInterestInSingleLanguage,
    SelectUserPlatformPreference
} from "./MobileRadioGroups";

const MobileQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    const [mobileState, mobileDispatch] = useReducer(mobileStateReducer, defaultMobileState, undefined);

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
                            >Mobile</Typography>
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
                    </div>
                </AppPage>
            </AppLayout>
        </>
    )
}

export default MobileQuestionnaire