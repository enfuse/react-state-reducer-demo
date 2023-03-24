import {useContext} from "react";
import {Typography} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import {AppContext} from "../../App";
import AppLayout from "../../components/AppLayout";
import AppPage from "../../components/AppPage";
import {FRONTEND_ACTIONS} from "./FrontendQuestionnaireState";
import {
	SelectUserExperienceWithFrontend,
	SelectUserInterestInFunctional,
	SelectUserInterestInModernity,
	SelectUserInterestInOpenSource,
	SelectUserInterestInUpdates
} from "./FrontendRadioGroups"
import SubmitButton from "../../components/SubmitButton";
import ResultCard from "../../components/ResultCard";

const FrontendQuestionnaire = () => {
	let appContext = useContext(AppContext)
	let appTheme = appContext.isDarkThemeActive ? appContext.appThemeDark : appContext.appThemeLight
	let frontendState = appContext.frontendState
	let frontendDispatch = appContext.frontendDispatch
	let pageStyle = appContext.pageStyle
	let pageBodyStyle = appContext.pageBodyStyle
	let pageHeaderStyle = appContext.pageHeaderStyle
	let resultStyle = appContext.resultStyle
	let resultDescriptionStyle = appContext.resultDescriptionStyle
	let resultItemStyle = appContext.resultItemStyle
	
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
					<div style={pageStyle}>
						<div style={pageHeaderStyle}>
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
											{frontendState.resultStatus.frameworkIcon}
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												{frontendState.resultStatus.frameworkTitle}
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
												{frontendState.resultStatus.frameworkDescription}
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
											{frontendState.resultStatus.languageIcon}
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												{frontendState.resultStatus.languageTitle}
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
												{frontendState.resultStatus.languageDescription}
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
											{frontendState.resultStatus.testingIcon}
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												{frontendState.resultStatus.testingTitle}
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
												{frontendState.resultStatus.testingDescription}
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

export default FrontendQuestionnaire