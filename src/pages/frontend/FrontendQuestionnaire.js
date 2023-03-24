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
	SelectUserInterestInModernity, SelectUserInterestInOpenSource,
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
											{frontendState.resultStatus.frameworkDescription}
										</Typography>
									</div>
								</ResultCard>
								<ResultCard>
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
											{frontendState.resultStatus.languageDescription}
										</Typography>
									</div>
								</ResultCard>
								<ResultCard>
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
											{frontendState.resultStatus.testingDescription}
										</Typography>
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