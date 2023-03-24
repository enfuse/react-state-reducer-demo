import {useContext} from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {Typography} from "@mui/material";

import {AppContext} from "../../App";
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

const BackendQuestionnaire = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    let backendState = appContext.backendState
    let setBackendState = appContext.setBackendState
    let pageStyle = appContext.pageStyle
    let pageBodyStyle = appContext.pageBodyStyle
    let pageHeaderStyle = appContext.pageHeaderStyle
    
    
    const generateResults = (event) => {
        event.preventDefault()
        if (backendState.userInterestInMicrosoft === '2'
            && backendState.userInterestInFunctional === '2'
        ) {
            setBackendState({
                ...backendState,
                pageContent: 'results',
                resultStatus: {
                    frameworkDescription: '.NET',
                    frameworkIcon: <DotNetIcon/>,
                    languageDescription: 'F#',
                    languageIcon: <FSharpIcon/>,
                    testingDescription: 'NUnit',
                    testingIcon: <NUnitIcon/>
                }
            })
        } else if (backendState.userInterestInMicrosoft === '2'
            && (backendState.userInterestInFunctional === '1' || backendState.userInterestInFunctional === '0')
        ) {
            setBackendState({
                ...backendState,
                pageContent: 'results',
                resultStatus: {
                    frameworkDescription: '.NET',
                    frameworkIcon: <DotNetIcon/>,
                    languageDescription: 'C#',
                    languageIcon: <CSharpIcon/>,
                    testingDescription: 'NUnit',
                    testingIcon: <NUnitIcon/>
                }
            })
        } else if ((backendState.userInterestInMicrosoft === '0' || backendState.userInterestInMicrosoft === '1')
            && (backendState.userInterestInWebApps === '1' || backendState.userInterestInWebApps === '2')
            && ((backendState.userInterestInFunctional === '0' || backendState.userInterestInFunctional === '1')
                || backendState.userInterestInModernity === '0'
            )
        ) {
            setBackendState({
                ...backendState,
                pageContent: 'results',
                resultStatus: {
                    frameworkDescription: 'Spring',
                    frameworkIcon: <SpringIcon/>,
                    languageDescription: 'Java',
                    languageIcon: <JavaIcon/>,
                    testingDescription: 'JUnit',
                    testingIcon: <JUnitIcon/>
                }
            })
        } else if ((backendState.userInterestInMicrosoft === '0' || backendState.userInterestInMicrosoft === '1')
            && (backendState.userInterestInWebApps === '1' || backendState.userInterestInWebApps === '2')
            && (backendState.userInterestInFunctional === '1' || backendState.userInterestInFunctional === '2')
            && (backendState.userInterestInModernity === '1')
        ) {
            setBackendState({
                ...backendState,
                pageContent: 'results',
                resultStatus: {
                    frameworkDescription: 'Spring',
                    frameworkIcon: <SpringIcon/>,
                    languageDescription: 'Kotlin',
                    languageIcon: <KotlinIcon/>,
                    testingDescription: 'JUnit',
                    testingIcon: <JUnitIcon/>
                }
            })
        } else if ((backendState.userInterestInMicrosoft === '0' || backendState.userInterestInMicrosoft === '1')
            && (backendState.userInterestInWebApps === '1' || backendState.userInterestInWebApps === '2')
            && (backendState.userInterestInFunctional === '1' || backendState.userInterestInFunctional === '2')
            && (backendState.userInterestInModernity === '2')
        ) {
            setBackendState({
                ...backendState,
                pageContent: 'results',
                resultStatus: {
                    frameworkDescription: 'Ktor',
                    frameworkIcon: <KtorIcon/>,
                    languageDescription: 'Kotlin',
                    languageIcon: <KotlinIcon/>,
                    testingDescription: 'Kotlin Test',
                    testingIcon: <KotlinIcon/>
                }
            })
        } else {
            setBackendState({
                ...backendState,
                pageContent: 'results',
                resultStatus: {
                    frameworkDescription: 'Flask',
                    frameworkIcon: <FlaskIcon/>,
                    languageDescription: 'Python',
                    languageIcon: <PythonIcon/>,
                    testingDescription: 'pytest',
                    testingIcon: <PyTestIcon/>
                }
            })
        }
    }
    
    const resetPage = (event) => {
        event.preventDefault()
        setBackendState({
            ...backendState,
            pageContent: 'quiz',
            resultStatus: {
                frameworkDescription: '',
                frameworkIcon: <></>,
                languageDescription: '',
                languageIcon: <></>,
                testingDescription: '',
                testingIcon: <></>
            }
        })
    }

    return (
        <>
            <AppLayout>
                <AppPage>
                    <div style={pageStyle}>
                        <div style={pageHeaderStyle}>
                            <Typography
                                color={appTheme.secondary}
                                fontFamily='-apple-system'
                                fontSize='2.5vh'
                                fontWeight='bold'
                            >Backend</Typography>
                            {backendState.pageContent === 'quiz'
                                ? <SubmitButton
                                    buttonIcon={<TaskAltIcon/>}
                                    buttonLabel='Submit'
                                    isDisabled={false}
                                    onClick={generateResults}
                                />
                                : <SubmitButton
                                    buttonIcon={<RestartAltIcon/>}
                                    buttonLabel={'Try Again'}
                                    isDisabled={backendState.pageContent === 'quiz'}
                                    onClick={resetPage}
                                />
                            }
                        </div>
                        {backendState.pageContent === 'quiz'
                            ? <div>
                                <SelectUserInterestInEmbedded
                                    userInterestInEmbedded={backendState.userInterestInEmbedded}
                                    setUserInterestInEmbedded={(newState) => {
                                        setBackendState({
                                            ...backendState,
                                            userInterestInEmbedded: newState
                                        })
                                    }}
                                />
                                <SelectUserInterestInFunctional
                                    userInterestInFunctional={backendState.userInterestInFunctional}
                                    setUserInterestInFunctional={(newState) => {
                                        setBackendState({
                                            ...backendState,
                                            userInterestInFunctional: newState
                                        })
                                    }}
                                />
                                <SelectUserInterestInMicrosoft
                                    userInterestInMicrosoft={backendState.userInterestInMicrosoft}
                                    setUserInterestInMicrosoft={(newState) => {
                                        setBackendState({
                                            ...backendState,
                                            userInterestInMicrosoft: newState
                                        })
                                    }}
                                />
                                <SelectUserInterestInModernity
                                    userInterestInModernity={backendState.userInterestInModernity}
                                    setUserInterestInModernity={(newState) => {
                                        setBackendState({
                                            ...backendState,
                                            userInterestInModernity: newState
                                        })
                                    }}
                                />
                                <SelectUserInterestInWebApps
                                    userInterestInWebApps={backendState.userInterestInWebApps}
                                    setUserInterestInWebApps={(newState) => {
                                        setBackendState({
                                            ...backendState,
                                            userInterestInWebApps: newState
                                        })
                                    }}
                                />
                            </div>
                            : <div style={pageBodyStyle}>
                                <ResultCard>
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        Framework
                                    </Typography>
                                    {backendState.resultStatus.frameworkIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {backendState.resultStatus.frameworkDescription}
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
                                    {backendState.resultStatus.languageIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {backendState.resultStatus.languageDescription}
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
                                    {backendState.resultStatus.testingIcon}
                                    <Typography
                                        color={appTheme.secondary}
                                        fontFamily='-apple-system'
                                        fontSize='2vh'
                                        fontWeight='bold'
                                    >
                                        {backendState.resultStatus.testingDescription}
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