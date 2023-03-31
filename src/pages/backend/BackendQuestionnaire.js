import {useContext} from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {Typography} from "@mui/material";

import {AppContext} from "../../App";
import AppPage from "../../components/AppPage";
import AppLayout from "../../components/AppLayout";
import {DjangoIcon, DotNetIcon, KtorIcon, SpringIcon} from "../../components/FrameworkIcons";
import {CSharpIcon, FSharpIcon, JavaIcon, KotlinIcon, PythonIcon} from "../../components/LanguageIcons";
import {
	SelectUserInterestInEmbedded,
	SelectUserInterestInFunctional,
	SelectUserInterestInMicrosoft,
	SelectUserInterestInModernity,
	SelectUserInterestInWebApps
} from "./BackendRadioGroups";
import ResultCard from "../../components/ResultCard";
import SubmitButton from "../../components/SubmitButton";
import {JUnitIcon, NUnitIcon, PyTestIcon} from "../../components/TestingIcons";
import {
	cSharpDescription,
	djangoDescription,
	dotNetDescription,
	fSharpDescription,
	javaDescription,
	junitDescription,
	kotlinDescription,
	kotlinTestDescription,
	ktorDescription,
	nUnitDescription,
	pythonDescription,
	pythonTestDescription,
	springDescription
} from "../../components/ToolDescriptions";

const SELECTIONS = Object.freeze({
	NOT_INTERESTED: '0',
	SLIGHTLY_INTERESTED: '1',
	VERY_INTERESTED: '2'
})

export const defaultBackendState = {
	pageContent: 'quiz',
	resultStatus: {
		frameworkDescription: '',
		frameworkIcon: <></>,
		frameworkTitle: '',
		languageDescription: '',
		languageIcon: <></>,
		languageTitle: '',
		testingDescription: '',
		testingIcon: <></>,
		testingTitle: ''
	},
	userInterestInEmbedded: SELECTIONS.NOT_INTERESTED,
	userInterestInFunctional: SELECTIONS.NOT_INTERESTED,
	userInterestInMicrosoft: SELECTIONS.NOT_INTERESTED,
	userInterestInModernity: SELECTIONS.NOT_INTERESTED,
	userInterestInWebApps: SELECTIONS.NOT_INTERESTED
}

const BackendQuestionnaire = () => {
	let appContext = useContext(AppContext)
	let appTheme = appContext.isDarkThemeActive ? appContext.appThemeDark : appContext.appThemeLight
	let backendState = appContext.backendState
	let setBackendState = appContext.setBackendState
	let pageStyle = appContext.pageStyle
	let pageBodyStyle = appContext.pageBodyStyle
	let pageHeaderStyle = appContext.pageHeaderStyle
	let resultStyle = appContext.resultStyle
	let resultDescriptionStyle = appContext.resultDescriptionStyle
	let resultItemStyle = appContext.resultItemStyle
	
	const generateResults = (event) => {
		event.preventDefault()
		if (backendState.userInterestInMicrosoft === '2'
			&& backendState.userInterestInFunctional === '2'
		) {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription: dotNetDescription,
					frameworkIcon: <DotNetIcon/>,
					frameworkTitle: '.NET',
					languageDescription: fSharpDescription,
					languageIcon: <FSharpIcon/>,
					languageTitle: 'F#',
					testingDescription: nUnitDescription,
					testingIcon: <NUnitIcon/>,
					testingTitle: 'NUnit'
				}
			})
		} else if (backendState.userInterestInMicrosoft === '2'
			&& (backendState.userInterestInFunctional === '1' || backendState.userInterestInFunctional === '0')
		) {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription: dotNetDescription,
					frameworkIcon: <DotNetIcon/>,
					frameworkTitle: '.NET',
					languageDescription: cSharpDescription,
					languageIcon: <CSharpIcon/>,
					languageTitle: 'C#',
					testingDescription: nUnitDescription,
					testingIcon: <NUnitIcon/>,
					testingTitle: 'NUnit'
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
					frameworkDescription: springDescription,
					frameworkIcon: <SpringIcon/>,
					frameworkTitle: 'Spring',
					languageDescription: javaDescription,
					languageIcon: <JavaIcon/>,
					languageTitle: 'Java',
					testingDescription: junitDescription,
					testingIcon: <JUnitIcon/>,
					testingTitle: 'JUnit'
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
					frameworkDescription: springDescription,
					frameworkIcon: <SpringIcon/>,
					frameworkTitle: 'Spring',
					languageDescription: kotlinDescription,
					languageIcon: <KotlinIcon/>,
					languageTitle: 'Kotlin',
					testingDescription: junitDescription,
					testingIcon: <JUnitIcon/>,
					testingTitle: 'JUnit'
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
					frameworkDescription: ktorDescription,
					frameworkIcon: <KtorIcon/>,
					frameworkTitle: 'Ktor',
					languageDescription: kotlinDescription,
					languageIcon: <KotlinIcon/>,
					languageTitle: 'Kotlin',
					testingDescription: kotlinTestDescription,
					testingIcon: <KotlinIcon/>,
					testingTitle: 'Kotlin Test'
				}
			})
		} else {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription: djangoDescription,
					frameworkIcon: <DjangoIcon/>,
					frameworkTitle: 'Django',
					languageDescription: pythonDescription,
					languageIcon: <PythonIcon/>,
					languageTitle: 'Python',
					testingDescription: pythonTestDescription,
					testingIcon: <PyTestIcon/>,
					testingTitle: 'pytest'
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
				frameworkTitle: '',
				languageDescription: '',
				languageIcon: <></>,
				languageTitle: '',
				testingDescription: '',
				testingIcon: <></>,
				testingTitle: ''
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
									<div style={resultStyle}>
										<div style={resultItemStyle}>
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
												{backendState.resultStatus.frameworkTitle}
											</Typography>
										</div>
										<div style={resultDescriptionStyle}>
											<Typography
												align='center'
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='1.5vh'
												fontWeight='normal'
											>
												{backendState.resultStatus.frameworkDescription}
											</Typography>
										</div>
									</div>
								</ResultCard>
								<ResultCard>
									<div style={resultStyle}>
										<div style={resultItemStyle}>
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
												{backendState.resultStatus.languageTitle}
											</Typography>
										</div>
										<div style={resultDescriptionStyle}>
											<Typography
												align='center'
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='1.5vh'
												fontWeight='normal'
											>
												{backendState.resultStatus.languageDescription}
											</Typography>
										</div>
									</div>
								</ResultCard>
								<ResultCard>
									<div style={resultStyle}>
										<div style={resultItemStyle}>
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
												{backendState.resultStatus.testingTitle}
											</Typography>
										</div>
										<div style={resultDescriptionStyle}>
											<Typography
												align='center'
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='1.5vh'
												fontWeight='normal'
											>
												{backendState.resultStatus.testingDescription}
											</Typography>
										</div>
									</div>
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