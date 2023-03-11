import {useContext, useState} from "react";
import {Typography} from "@mui/material";

import {AppContext} from "../App";
import AppPage from "../components/AppPage";
import AppLayout from "../components/AppLayout";
import {SelectUserInterestInFunctional, SelectUserInterestInMicrosoft} from "../components/RadioGroups";

const BackendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    const [userInterestInFunctional, setUserInterestInFunctional] = useState('Not Interested')
    const [userInterestInMicrosoft, setUserInterestInMicrosoft] = useState('Not Interested')
    const [userInterestInWebApps, setUserInterestInWebApps] = useState('Not Interested')

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
                        >Backend</Typography>
                        <div>
                            <SelectUserInterestInFunctional
                                userInterestInFunctional={userInterestInFunctional}
                                setUserInterestInFunctional={setUserInterestInFunctional}
                            />
                            <SelectUserInterestInMicrosoft
                                userInterestInMicrosoft={userInterestInMicrosoft}
                                setUserInterestInMicrosoft={setUserInterestInMicrosoft}
                            />
                        </div>
                    </div>
                </AppPage>
            </AppLayout>
        </>
    )
}

export default BackendQuestionnaire