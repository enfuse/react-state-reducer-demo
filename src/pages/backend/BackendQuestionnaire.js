import {useContext, useState} from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {Dialog, Typography} from "@mui/material";

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
import {DotNetIcon, SpringIcon} from "../../components/FrameworkIcons";
import {CSharpIcon, FSharpIcon, JavaIcon} from "../../components/LanguageIcons";
import {JUnitIcon, NUnitIcon} from "../../components/TestingIcons";

const BackendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    
    const [pageContent, setPageContent] = useState('quiz')
    const [userInterestInEmbedded, setUserInterestInEmbedded] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInFunctional, setUserInterestInFunctional] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInMicrosoft, setUserInterestInMicrosoft] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInModernity, setUserInterestInModernity] = useState(SELECTIONS.NOT_INTERESTED)
    const [userInterestInWebApps, setUserInterestInWebApps] = useState(SELECTIONS.NOT_INTERESTED)
    
    const [frameworkIcon, setFrameworkIcon] = useState(<></>)
    const [languageIcon, setLanguageIcon] = useState(<></>)
    const [testingIcon, setTestingIcon] = useState(<></>)
    
    const [frameworkDescription, setFrameworkDescription] = useState('')
    const [languageDescription, setLanguageDescription] = useState('')
    const [testingDescription, setTestingDescription] = useState('')

    const generateResults = () => {
        console.log(userInterestInMicrosoft)
        console.log(userInterestInFunctional)
        if (userInterestInMicrosoft === SELECTIONS.VERY_INTERESTED
            && userInterestInFunctional === SELECTIONS.VERY_INTERESTED
        ) {
            setFrameworkDescription('.NET')
            setFrameworkIcon(<DotNetIcon/>)
            setLanguageDescription('F#')
            setLanguageIcon(<FSharpIcon/>)
            setTestingDescription('NUnit')
            setTestingIcon(<NUnitIcon/>)
        } else if (userInterestInMicrosoft === SELECTIONS.VERY_INTERESTED) {
            setFrameworkDescription('.NET')
            setFrameworkIcon(<DotNetIcon/>)
            setLanguageDescription('C#')
            setLanguageIcon(<CSharpIcon/>)
            setTestingDescription('NUnit')
            setTestingIcon(<NUnitIcon/>)
        } else {
            setFrameworkDescription('Spring')
            setFrameworkIcon(<SpringIcon/>)
            setLanguageDescription('Java')
            setLanguageIcon(<JavaIcon/>)
            setTestingDescription('JUnit')
            setTestingIcon(<JUnitIcon/>)
        }
    
        setPageContent('results')
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
                                <ResultCard>
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        Framework
                                    </Typography>
                                    {frameworkIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {frameworkDescription}
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
                                    {languageIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {languageDescription}
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
                                    {testingIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        <div>{testingDescription}</div>
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

export default BackendQuestionnaire