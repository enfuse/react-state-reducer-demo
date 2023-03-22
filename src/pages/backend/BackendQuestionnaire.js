import {useContext, useState} from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {Typography} from "@mui/material";

import {AppContext, SELECTIONS} from "../../App";
import AppPage from "../../components/AppPage";
import AppLayout from "../../components/AppLayout";
import {
    SelectUserInterestInEmbedded,
    SelectUserInterestInFunctional,
    SelectUserInterestInMicrosoft,
    SelectUserInterestInModernity,
    SelectUserInterestInWebApps
} from "./BackendRadioGroups";
import SubmitButton from "../../components/SubmitButton";
import ResultCard from "../../components/ResultCard";
import {SpringIcon} from "../../components/FrameworkIcons";
import {JavaIcon} from "../../components/LanguageIcons";
import {JestIcon} from "../../components/TestingIcons";

const BackendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    
    const [pageContent, setPageContent] = useState('quiz')
    const [userInterestInEmbedded, setUserInterestInEmbedded] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInFunctional, setUserInterestInFunctional] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInMicrosoft, setUserInterestInMicrosoft] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInModernity, setUserInterestInModernity] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInWebApps, setUserInterestInWebApps] = useState(SELECTIONS.NOT_INTERESTED)
    
    const [frameworkCard, setFrameworkCard] = useState(null)
    const [languageCard, setLanguageCard] = useState(null)
    const [testingCard, setTestingCard] = useState(null)

    const generateResults = () => {
        let frameworkIcon = SpringIcon
        let languageIcon = JavaIcon
        let testingIcon = JestIcon
        
        setPageContent('results')
        setFrameworkCard(<ResultCard>
            <Typography
              color={appTheme.secondary}
              fontFamily='-apple-system'
              fontSize='2vh'
              fontWeight='bold'
              sx={{
            }}>
                Framework
            </Typography>
            {frameworkIcon}
        </ResultCard>)
        setLanguageCard(<ResultCard>
            <Typography
              color={appTheme.secondary}
              fontFamily='-apple-system'
              fontSize='2vh'
              fontWeight='bold'
              sx={{
            }}>
                Language
            </Typography>
            {languageIcon}
        </ResultCard>)
        setTestingCard(<ResultCard>
            <Typography
                color={appTheme.secondary}
                fontFamily='-apple-system'
                fontSize='2vh'
                fontWeight='bold'
            >
                Testing
            </Typography>
            {testingIcon}
        </ResultCard>)
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
                            >Backend</Typography>
                            <SubmitButton
                                buttonIcon={<TaskAltIcon/>}
                                buttonLabel='Submit'
                                isDisabled={false}
                                onClick={generateResults}
                            />
                        </div>
                        {pageContent === 'quiz'
                            ? <div>
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
                            : <div style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '80%',
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                {frameworkCard}
                                {languageCard}
                                {testingCard}
                            </div>
                        }
                    </div>
                </AppPage>
            </AppLayout>
        </>
    )
}

export default BackendQuestionnaire