import {useContext} from "react";
import {AppContext} from "../App";
import {ListItemButton, ListItemText} from "@mui/material";

const NavigationButton = ({buttonTitle, onClick}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.appThemeDark : appContext.appThemeLight

    return (
        <ListItemButton
            color={appTheme.secondary}
            onClick={onClick}
            sx={{
                backgroundColor: appTheme.primary,
                border: 'solid',
                borderColor: appTheme.tertiary,
                boxShadow: 5,
                width: '100%',
                '&:hover': {
                    backgroundColor: appTheme.tertiary
                }
            }}
        >
            <ListItemText
                primary={buttonTitle}
                primaryTypographyProps={{
                    align: 'center',
                    color: appTheme.secondary,
                    fontFamily: '-apple-system',
                    fontSize: '2vh',
                    fontWeight: 'bold'
                }}
            />
        </ListItemButton>
    )
}

export default NavigationButton