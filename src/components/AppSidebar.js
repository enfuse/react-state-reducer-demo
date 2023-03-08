import {useContext} from "react";
import {AppContext} from "../App";
import {AppBar, Box, CssBaseline, Drawer, Toolbar, Typography} from "@mui/material";
import NavigationList from "./NavigationList";

const AppSidebar = () => {
    let appContext = useContext(AppContext)
    let darkTheme = appContext.darkTheme
    let lightTheme = appContext.lightTheme

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position='fixed' sx={{
                backgroundColor: lightTheme.primary,
                height: '8vh',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}>
                <Toolbar>
                    <Typography color={lightTheme.tertiary} fontSize='24px' fontWeight='bold'>
                        Main Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' variant='permanent' sx={{
                [`& .MuiDrawer-paper`]: {
                    backgroundColor: lightTheme.secondary,
                    borderRight: 'solid',
                    borderRightColor: lightTheme.tertiary,
                    boxSizing: 'border-box',
                    width: '15vw'
                }
            }}>
                <Toolbar/>
                <Box sx={{
                    alignItems: 'left',
                    display: 'flex',
                    direction: 'row',
                    height: '92vh',
                    justifyItems: 'center',
                    overflow: 'auto',
                    position: 'absolute',
                    top: '7vh',
                    width: '13vw'
                }}>
                    <NavigationList/>
                </Box>
            </Drawer>
        </Box>
    )
}

export default AppSidebar