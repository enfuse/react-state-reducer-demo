import {useContext} from "react";
import {AppContext, SELECTIONS} from "../../App";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {PLATFORMS} from "./MobileQuestionnaireState";

const SelectUserInterestInFunctional = ({userInterestInFunctional, setUserInterestInFunctional}) => {
	let appContext = useContext(AppContext)
	let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
	let radioLabelProps = {
		color: appTheme.secondary,
		fontFamily: '-apple-system',
		fontSize: '1.75vh',
		fontWeight: 'regular'
	}
	
	return (
		<FormControl>
			<FormLabel id="functional-selection-label" sx={{
				color: radioLabelProps.color,
				fontFamily: radioLabelProps.fontFamily,
				fontSize: radioLabelProps.fontSize,
				fontWeight: 'bold',
				'&.Mui-focused': {color: appTheme.secondary}
			}}>Do you prefer to use functional or object-oriented programming?</FormLabel>
			<RadioGroup
				aria-labelledby="functional-selection-label"
				name="functional-selection"
				onChange={(event) => setUserInterestInFunctional(event.target.value)}
				row={true}
				value={userInterestInFunctional}
			>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to use object-oriented"
					value={SELECTIONS.NOT_INTERESTED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to use both options"
					value={SELECTIONS.SLIGHTLY_INTERESTED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to use functional"
					value={SELECTIONS.VERY_INTERESTED}
				/>
			</RadioGroup>
		</FormControl>
	)
}

const SelectUserInterestInModernity = ({userInterestInModernity, setUserInterestInModernity}) => {
	let appContext = useContext(AppContext)
	let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
	let radioLabelProps = {
		color: appTheme.secondary,
		fontFamily: '-apple-system',
		fontSize: '1.75vh',
		fontWeight: 'regular'
	}
	
	return (
		<FormControl>
			<FormLabel id="modernity-selection-label" sx={{
				color: radioLabelProps.color,
				fontFamily: radioLabelProps.fontFamily,
				fontSize: radioLabelProps.fontSize,
				fontWeight: 'bold',
				'&.Mui-focused': {color: appTheme.secondary}
			}}>Would you prefer using tools released within the last ~5 years?</FormLabel>
			<RadioGroup
				aria-labelledby="modernity-selection-label"
				name="modernity-selection"
				onChange={(event) => setUserInterestInModernity(event.target.value)}
				row={true}
				value={userInterestInModernity}
			>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to use older tools"
					value={SELECTIONS.NOT_INTERESTED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I have no preference"
					value={SELECTIONS.SLIGHTLY_INTERESTED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to use newer tools"
					value={SELECTIONS.VERY_INTERESTED}
				/>
			</RadioGroup>
		</FormControl>
	)
}

const SelectUserInterestInOpenSource = ({userInterestInOpenSource, setUserInterestInOpenSource}) => {
	let appContext = useContext(AppContext)
	let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
	let radioLabelProps = {
		color: appTheme.secondary,
		fontFamily: '-apple-system',
		fontSize: '1.75vh',
		fontWeight: 'regular'
	}
	
	return (
		<FormControl>
			<FormLabel id="open-source-selection-label" sx={{
				color: radioLabelProps.color,
				fontFamily: radioLabelProps.fontFamily,
				fontSize: radioLabelProps.fontSize,
				fontWeight: 'bold',
				'&.Mui-focused': {color: appTheme.secondary}
			}}>Are you interested in working with open-source/third-party libraries?</FormLabel>
			<RadioGroup
				aria-labelledby="open-source-selection-label"
				name="open-source-selection"
				onChange={(event) => setUserInterestInOpenSource(event.target.value)}
				row={true}
				value={userInterestInOpenSource}
			>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to use open-source tools as little as possible"
					value={SELECTIONS.NOT_INTERESTED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer using both methods"
					value={SELECTIONS.SLIGHTLY_INTERESTED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to use open-source tools as much as possible"
					value={SELECTIONS.VERY_INTERESTED}
				/>
			</RadioGroup>
		</FormControl>
	)
}

const SelectUserInterestInSingleLanguage = ({userInterestInSingleLanguage, setUserInterestInSingleLanguage}) => {
	let appContext = useContext(AppContext)
	let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
	let radioLabelProps = {
		color: appTheme.secondary,
		fontFamily: '-apple-system',
		fontSize: '1.75vh',
		fontWeight: 'regular'
	}
	
	return (
		<FormControl>
			<FormLabel id="single-language-selection-label" sx={{
				color: radioLabelProps.color,
				fontFamily: radioLabelProps.fontFamily,
				fontSize: radioLabelProps.fontSize,
				fontWeight: 'bold',
				'&.Mui-focused': {color: appTheme.secondary}
			}}>Would you like to develop your mobile app and the APIs that serve it in the same language?</FormLabel>
			<RadioGroup
				aria-labelledby="single-language-selection-label"
				name="single-language-selection"
				onChange={(event) => setUserInterestInSingleLanguage(event.target.value)}
				row={true}
				value={userInterestInSingleLanguage}
			>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to avoid single-language solutions"
					value={SELECTIONS.NOT_INTERESTED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I have no preference"
					value={SELECTIONS.SLIGHTLY_INTERESTED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer to use single-language solutions"
					value={SELECTIONS.VERY_INTERESTED}
				/>
			</RadioGroup>
		</FormControl>
	)
}

const SelectUserPlatformPreference = ({userPlatformPreference, setUserPlatformPreference}) => {
	let appContext = useContext(AppContext)
	let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
	let radioLabelProps = {
		color: appTheme.secondary,
		fontFamily: '-apple-system',
		fontSize: '1.75vh',
		fontWeight: 'regular'
	}
	
	return (
		<FormControl>
			<FormLabel id="platform-selection-label" sx={{
				color: radioLabelProps.color,
				fontFamily: radioLabelProps.fontFamily,
				fontSize: radioLabelProps.fontSize,
				fontWeight: 'bold',
				'&.Mui-focused': {color: appTheme.secondary}
			}}>Which mobile platforms will your application be deployed on?</FormLabel>
			<RadioGroup
				aria-labelledby="platform-selection-label"
				name="platform-selection"
				onChange={(event) => setUserPlatformPreference(event.target.value)}
				row={true}
				value={userPlatformPreference}
			>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I will be deploying apps on Android"
					value={PLATFORMS.ANDROID}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I will be deploying cross-platform apps"
					value={PLATFORMS.CROSS_PLATFORM}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I will be deploying apps on iOS"
					value={PLATFORMS.IOS}
				/>
			</RadioGroup>
		</FormControl>
	)
}

export {
		SelectUserInterestInFunctional,
		SelectUserInterestInModernity,
		SelectUserInterestInOpenSource,
		SelectUserInterestInSingleLanguage,
		SelectUserPlatformPreference
}