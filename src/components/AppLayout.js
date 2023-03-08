import {useContext} from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {AppBar, Box, Button, CssBaseline, Drawer, Toolbar, Typography} from "@mui/material";

import {AppContext} from "../App";
import NavigationList from "./NavigationList";

const AppLayout = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position='fixed' sx={{
                backgroundColor: appTheme.primary,
                height: '8vh',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Toolbar>
                        <Typography color={appTheme.secondary} fontSize='24px' fontWeight='bold'>
                            Main Menu
                        </Typography>
                    </Toolbar>
                    <Button
                        endIcon={<DarkModeOutlinedIcon/>}
                        onClick={() => {
                            appContext.setIsDarkThemeActive(!appContext.isDarkThemeActive)
                        }}
                        variant='outlined'
                    >{appContext.isDarkThemeActive ? 'Light Mode' : 'Dark Mode'}</Button>
                </div>
            </AppBar>
            <Drawer anchor='left' variant='permanent' sx={{
                [`& .MuiDrawer-paper`]: {
                    backgroundColor: appTheme.primary,
                    borderRight: 'solid',
                    borderRightColor: appTheme.tertiary,
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

export default AppLayout