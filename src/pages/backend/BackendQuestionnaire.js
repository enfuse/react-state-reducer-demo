import {useContext, useState} from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
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
import {DotNetIcon, FlaskIcon, KtorIcon, SpringIcon} from "../../components/FrameworkIcons";
import {CSharpIcon, FSharpIcon, JavaIcon, KotlinIcon, PythonIcon} from "../../components/LanguageIcons";
import {JUnitIcon, NUnitIcon, PyTestIcon} from "../../components/TestingIcons";
import IconFrame from "../../components/IconFrame";

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
    
    const generateResults = (event) => {
        event.preventDefault()
        if (userInterestInMicrosoft === '2'
            && userInterestInFunctional === '2'
        ) {
            setFrameworkDescription('.NET')
            setFrameworkIcon(<DotNetIcon/>)
            setLanguageDescription('F#')
            setLanguageIcon(<FSharpIcon/>)
            setTestingDescription('NUnit')
            setTestingIcon(<NUnitIcon/>)
        } else if (userInterestInMicrosoft === '2'
          && (userInterestInFunctional === '1' || userInterestInFunctional === '0')
        ) {
            setFrameworkDescription('.NET')
            setFrameworkIcon(<DotNetIcon/>)
            setLanguageDescription('C#')
            setLanguageIcon(<CSharpIcon/>)
            setTestingDescription('NUnit')
            setTestingIcon(<NUnitIcon/>)
        } else if ((userInterestInMicrosoft === '0' || userInterestInMicrosoft === '1')
            && (userInterestInWebApps === '1' || userInterestInWebApps === '2')
            && ((userInterestInFunctional === '0' || userInterestInFunctional === '1')
                || userInterestInModernity === '0'
            )
        ) {
            setFrameworkDescription('Spring')
            setFrameworkIcon(<SpringIcon/>)
            setLanguageDescription('Java')
            setLanguageIcon(<JavaIcon/>)
            setTestingDescription('JUnit')
            setTestingIcon(<JUnitIcon/>)
        } else if ((userInterestInMicrosoft === '0' || userInterestInMicrosoft === '1')
          && (userInterestInWebApps === '1' || userInterestInWebApps === '2')
          && (userInterestInFunctional === '1' || userInterestInFunctional === '2')
          && (userInterestInModernity === '1')
        ) {
            setFrameworkDescription('Spring')
            setFrameworkIcon(<SpringIcon/>)
            setLanguageDescription('Kotlin')
            setLanguageIcon(<KotlinIcon/>)
            setTestingDescription('JUnit')
            setTestingIcon(<JUnitIcon/>)
        } else if ((userInterestInMicrosoft === '0' || userInterestInMicrosoft === '1')
          && (userInterestInWebApps === '1' || userInterestInWebApps === '2')
          && (userInterestInFunctional === '1' || userInterestInFunctional === '2')
          && (userInterestInModernity === '2')
        ) {
            setFrameworkDescription('Ktor')
            setFrameworkIcon(<KtorIcon/>)
            setLanguageDescription('Kotlin')
            setLanguageIcon(<KotlinIcon/>)
            setTestingDescription('Kotlin Test')
            setTestingIcon(<KotlinIcon/>)
        } else {
            setFrameworkDescription('Flask')
            setFrameworkIcon(<FlaskIcon/>)
            setLanguageDescription('Python')
            setLanguageIcon(<PythonIcon/>)
            setTestingDescription('pytest')
            setTestingIcon(<PyTestIcon/>)
        }
    
        setPageContent('results')
    }
    
    const resetPage = (event) => {
        event.preventDefault()
        setFrameworkDescription('')
        setFrameworkIcon(<></>)
        setLanguageDescription('')
        setLanguageIcon(<></>)
        setTestingDescription('')
        setTestingIcon(<></>)
        setPageContent('quiz')
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
                            >Backend</Typography>
                            {pageContent === 'quiz'
                                ? <SubmitButton
                                    buttonIcon={<TaskAltIcon/>}
                                    buttonLabel='Submit'
                                    isDisabled={false}
                                    onClick={generateResults}
                                />
                                : <SubmitButton
                                    buttonIcon={<RestartAltIcon/>}
                                    buttonLabel={'Try Again'}
                                    isDisabled={pageContent === 'quiz'}
                                    onClick={resetPage}
                                />
                            }
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
                                    <IconFrame icon={frameworkIcon}/>
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
                                    <IconFrame icon={languageIcon}/>
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
                                    <IconFrame icon={testingIcon}/>
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