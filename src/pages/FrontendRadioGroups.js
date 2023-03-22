import {useContext} from "react";
import {AppContext, SELECTIONS} from "../App";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {EXPERIENCE} from "./FrontendQuestionnaireState";

const SelectUserExperienceWithFrontend = ({userExperienceWithFrontend, setUserExperienceWithFrontend}) => {
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
			<FormLabel id="experience-selection-label" sx={{
				color: radioLabelProps.color,
				fontFamily: radioLabelProps.fontFamily,
				fontSize: radioLabelProps.fontSize,
				fontWeight: 'bold',
				'&.Mui-focused': {color: appTheme.secondary}
			}}>How much experience do you have using the core frontend skill-set? (Javascript, CSS, & HTML)</FormLabel>
			<RadioGroup
				aria-labelledby="experience-selection-label"
				name="experience-selection"
				onChange={(event) => setUserExperienceWithFrontend(event.target.value)}
				row={true}
				value={userExperienceWithFrontend}
			>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I have very little frontend experience"
					value={EXPERIENCE.NOT_EXPERIENCED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I have a moderate amount of frontend experience"
					value={EXPERIENCE.SLIGHTLY_EXPERIENCED}
				/>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I have a huge amount of frontend experience"
					value={EXPERIENCE.VERT_EXPERIENCED}
				/>
			</RadioGroup>
		</FormControl>
	)
}

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
			}}>Are you interested in working with open-source/third-party libraries</FormLabel>
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

const SelectUserInterestInUpdates = ({userInterestInUpdates, setUserInterestInUpdates}) => {
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
			<FormLabel id="updates-selection-label" sx={{
				color: radioLabelProps.color,
				fontFamily: radioLabelProps.fontFamily,
				fontSize: radioLabelProps.fontSize,
				fontWeight: 'bold',
				'&.Mui-focused': {color: appTheme.secondary}
			}}>Do you enjoy working with software that is frequently updated?</FormLabel>
			<RadioGroup
				aria-labelledby="updates-selection-label"
				name="updates-selection"
				onChange={(event) => setUserInterestInUpdates(event.target.value)}
				row={true}
				value={userInterestInUpdates}
			>
				<FormControlLabel
					componentsProps={{typography: radioLabelProps}}
					control={
						<Radio sx={{
							color: appTheme.secondary,
							'&.Mui-checked': {color: appTheme.secondary}
						}}/>
					}
					label="I prefer using software with minimal updates"
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
					label="I prefer to use software with frequent updates"
					value={SELECTIONS.VERY_INTERESTED}
				/>
			</RadioGroup>
		</FormControl>
	)
}

export {
	SelectUserExperienceWithFrontend,
	SelectUserInterestInFunctional,
	SelectUserInterestInModernity,
	SelectUserInterestInOpenSource,
	SelectUserInterestInUpdates
}