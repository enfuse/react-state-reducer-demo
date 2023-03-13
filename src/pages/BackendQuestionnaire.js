import {useContext, useEffect, useState} from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {Typography} from "@mui/material";

import {AppContext} from "../App";
import AppPage from "../components/AppPage";
import AppLayout from "../components/AppLayout";
import {
    SelectUserInterestInEmbedded,
    SelectUserInterestInFunctional,
    SelectUserInterestInMicrosoft, SelectUserInterestInModernity,
    SelectUserInterestInWebApps
} from "./BackendRadioGroups";
import SubmitButton from "../components/SubmitButton";

export const SELECTIONS = Object.freeze({
    NOT_INTERESTED: 0,
    SLIGHTLY_INTERESTED: 1,
    VERY_INTERESTED: 2
})

const BackendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    const [userInterestInEmbedded, setUserInterestInEmbedded] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInFunctional, setUserInterestInFunctional] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInMicrosoft, setUserInterestInMicrosoft] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInModernity, setUserInterestInModernity] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInWebApps, setUserInterestInWebApps] = useState(SELECTIONS.NOT_INTERESTED)

    const generateResults = () => {
        alert('WIP')
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
                            >Backend</Typography>
                            <SubmitButton
                                buttonIcon={<TaskAltIcon/>}
                                buttonLabel='Submit'
                                isDisabled={false}
                                onClick={generateResults}
                            />
                        </div>
                        <div>
                            <SelectUserInterestInEmbedded
                                userInterestInEmbedded={userInterestInEmbedded}
                                setUserInterestInEmbedded={setUserInterestInEmbedded}
                            />
                            <SelectUserInterestInFunctional
                                userInterestInFunctional={userInterestInFunctional}
                                setUserInterestInFunctional={setUserInterestInFunctional}
                            />
                            <SelectUserInterestInMicrosoft
                                userInterestInMicrosoft={userInterestInMicrosoft}
                                setUserInterestInMicrosoft={setUserInterestInMicrosoft}
                            />
                            <SelectUserInterestInModernity
                                userInterestInModernity={userInterestInModernity}
                                setUserInterestInModernity={setUserInterestInModernity}
                            />
                            <SelectUserInterestInWebApps
                                userInterestInWebApps={userInterestInWebApps}
                                setUserInterestInWebApps={setUserInterestInWebApps}
                            />
                        </div>
                    </div>
                </AppPage>
            </AppLayout>
        </>
    )
}

export default BackendQuestionnaire