import {useContext} from "react";
import {Card} from "@mui/material";

import {AppContext} from "../App";

const ResultCard = ({children}) => {
		let context = useContext(AppContext)
		let appTheme = context.isDarkThemeActive ? context.darkTheme : context.lightTheme
	
		return (
				<Card elevation={10} sx={{
						alignItems: 'center',
						backgroundColor: appTheme.primary,
						border: 'solid ' + appTheme.tertiary,
						borderWidth: '1vh',
						color: appTheme.primary,
						display: 'flex',
						flexDirection: 'column',
						height: '75%',
						justifyContent: 'flex-start',
						width: '90%'
				}}>{children}</Card>
		)
}

export default ResultCard