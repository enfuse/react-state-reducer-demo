import {useContext} from "react";
import {AppContext} from "../App";
import {ListItemButton, ListItemText} from "@mui/material";

const NavigationButton = ({buttonTitle, onClick}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <ListItemButton
            color={appTheme.secondary}
            onClick={onClick}
            sx={{
                backgroundColor: appTheme.secondary,
                border: 'solid',
                borderColor: appTheme.secondary,
                width: '100%',
                '&:hover': {
                    backgroundColor: appTheme.tertiary,
                    color: appTheme.tertiary
                }
            }}
        >
            <ListItemText
                color={appTheme.primary}
                primary={buttonTitle}
                primaryTypographyProps={{
                    align: 'center',
                    color: appTheme.primary,
                    fontFamily: '-apple-system',
                    fontSize: 20,
                    fontWeight: 'bolder'
                }}
            />
        </ListItemButton>
    )
}

export default NavigationButton