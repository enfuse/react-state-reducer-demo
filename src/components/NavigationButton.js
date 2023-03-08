import {useContext} from "react";
import {AppContext} from "../App";
import {ListItemButton, ListItemText} from "@mui/material";

const NavigationButton = ({buttonTitle, onClick}) => {
    let appContext = useContext(AppContext)
    let darkTheme = appContext.darkTheme
    let lightTheme = appContext.lightTheme

    return (
        <ListItemButton
            color={lightTheme.secondary}
            onClick={onClick}
            sx={{
                backgroundColor: lightTheme.secondary,
                border: 'solid',
                borderColor: lightTheme.secondary,
                '&:hover': {
                    backgroundColor: lightTheme.tertiary,
                    color: lightTheme.tertiary
                }
            }}
        >
            <ListItemText
                color={lightTheme.primary}
                primary={buttonTitle}
                primaryTypographyProps={{
                    align: 'center',
                    color: lightTheme.primary,
                    fontSize: 20,
                    fontWeight: 'bolder'
                }}
            />
        </ListItemButton>
    )
}

export default NavigationButton