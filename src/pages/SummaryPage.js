import AppLayout from "../components/AppLayout";
import AppPage from "../components/AppPage";
import {useContext} from "react";
import {AppContext} from "../App";
import ResultCard from "../components/ResultCard";
import {Typography} from "@mui/material";
import IconFrame from "../components/IconFrame";
import SubmitButton from "../components/SubmitButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {useNavigate} from "react-router-dom";

const SummaryPage = () => {
		let navigate = useNavigate()
		let appContext = useContext(AppContext)
		let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
		let frontendResults = appContext.frontendState.resultStatus
		let mobileResults = appContext.mobileState.resultStatus
		let pageStyle = appContext.pageStyle
		let pageBodyStyle = appContext.pageBodyStyle
		let pageHeaderStyle = appContext.pageHeaderStyle
	
		const resetPage = () => {
				appContext.initializeResults()
				navigate('/')
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
																Summary
														</Typography>
														<SubmitButton
																buttonIcon={<RestartAltIcon/>}
																buttonLabel='Try Again'
																isDisabled={false}
																onClick={resetPage}
														/>
												</div>
												<div style={pageBodyStyle}>
														<ResultCard>
																<div style={{
																		alignContent: 'center',
																		display: 'flex',
																		flexDirection: 'row',
																		height: '100%',
																		justifyContent: 'space-evenly',
																		width: '100%'
																}}>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				height: '100%',
																				flexDirection: 'column',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Backend Framework
																				</Typography>
																				{frontendResults.frameworkIcon}
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{frontendResults.frameworkDescription}
																				</Typography>
																		</div>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				flexDirection: 'column',
																				height: '100%',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Backend Language
																				</Typography>
																				{frontendResults.languageIcon}
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{frontendResults.languageDescription}
																				</Typography>
																		</div>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				flexDirection: 'column',
																				height: '100%',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Backend Testing
																				</Typography>
																				<IconFrame icon={frontendResults.testingIcon}/>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{frontendResults.testingDescription}
																				</Typography>
																		</div>
																</div>
														</ResultCard>
														<ResultCard>
																<div style={{
																		alignContent: 'center',
																		display: 'flex',
																		flexDirection: 'row',
																		height: '100%',
																		justifyContent: 'space-evenly',
																		width: '100%'
																}}>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				flexDirection: 'column',
																				height: '100%',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Frontend Framework
																				</Typography>
																				{frontendResults.frameworkIcon}
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{frontendResults.frameworkDescription}
																				</Typography>
																		</div>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				flexDirection: 'column',
																				height: '100%',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Frontend Language
																				</Typography>
																				{frontendResults.languageIcon}
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{frontendResults.languageDescription}
																				</Typography>
																		</div>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				flexDirection: 'column',
																				height: '100%',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Frontend Testing
																				</Typography>
																				{frontendResults.testingIcon}
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{frontendResults.testingDescription}
																				</Typography>
																		</div>
																</div>
														</ResultCard>
														<ResultCard>
																<div style={{
																		alignContent: 'center',
																		display: 'flex',
																		flexDirection: 'row',
																		height: '100%',
																		justifyContent: 'space-evenly',
																		width: '100%'
																}}>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				flexDirection: 'column',
																				height: '100%',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Mobile Framework
																				</Typography>
																				{mobileResults.frameworkIcon}
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{mobileResults.frameworkDescription}
																				</Typography>
																		</div>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				flexDirection: 'column',
																				height: '100%',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Mobile Language
																				</Typography>
																				{mobileResults.languageIcon}
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{mobileResults.languageDescription}
																				</Typography>
																		</div>
																		<div style={{
																				alignContent: 'center',
																				display: 'flex',
																				flexDirection: 'column',
																				height: '100%',
																				justifyContent: 'flex-start'
																		}}>
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						Mobile Testing
																				</Typography>
																				{mobileResults.testingIcon}
																				<Typography
																						color={appTheme.secondary}
																						fontFamily='-apple-system'
																						fontSize='2vh'
																						fontWeight='bold'
																				>
																						{mobileResults.testingDescription}
																				</Typography>
																		</div>
																</div>
														</ResultCard>
												</div>
										</div>
								</AppPage>
						</AppLayout>
				</>
		)
}

export default SummaryPage