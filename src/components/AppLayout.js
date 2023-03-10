import {useContext} from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {AppBar, Box, Button, Drawer, Paper, Toolbar, Typography} from "@mui/material";

import {AppContext} from "../App";
import NavigationList from "./NavigationList";

const AppLayout = ({children}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <>
            <Box sx={{display: 'flex', height: '100vh', width: '100vw'}}>
                <Paper variant='outlined' square sx={{
                    alignItems: 'center',
                    backgroundColor: appTheme.primary,
                    bottom: '0px',
                    color: appTheme.primary,
                    display: 'flex',
                    flexDirection: 'row',
                    height: '90%',
                    justifyContent: 'center',
                    position: 'fixed',
                    right: '0px',
                    width: '80%'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '90%',
                        width: '90%'
                    }}>
                        {children}
                    </div>
                </Paper>
                <AppBar sx={{
                    backgroundColor: appTheme.primary,
                    height: '10%',
                    minHeight: '50px',
                    minWidth: '100px',
                    width: '100%',
                    zIndex: (theme) => theme.zIndex.drawer + 5
                }}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Toolbar>
                            <Typography
                                color={appTheme.secondary}
                                fontFamily='-apple-system'
                                fontSize='24px'
                                fontWeight='bold'
                            >Toolkit Builder</Typography>
                        </Toolbar>
                        <Button
                            endIcon={appContext.isDarkThemeActive
                                ? <LightModeOutlinedIcon/>
                                : <DarkModeOutlinedIcon/>
                            }
                            onClick={() => {
                                appContext.setIsDarkThemeActive(!appContext.isDarkThemeActive)
                            }}
                            size='medium'
                            variant='outlined'
                        >
                            {appContext.isDarkThemeActive
                                ? <Typography
                                    color={appTheme.tertiary}
                                    fontFamily='-apple-system'
                                    fontSize='16px'
                                    fontWeight='normal'
                                >Light Mode</Typography>
                                : <Typography
                                    color={appTheme.tertiary}
                                    fontFamily='-apple-system'
                                    fontSize='16px'
                                    fontWeight='normal'
                                >Dark Mode</Typography>
                            }
                        </Button>
                    </div>
                </AppBar>
                <Box sx={{
                    left: '0px',
                    height: '100%',
                    minHeight: '150px',
                    minWidth: '100px',
                    position: 'fixed',
                    top: '0px',
                    width: '20%'
                }}>
                    <Box sx={{height: '10%', minHeight: '15px'}}/>
                    <Drawer
                        anchor='left'
                        variant='permanent'
                        PaperProps={{
                            style: {
                                backgroundColor: appTheme.primary,
                                bottom: '0px',
                                left: '0px',
                                overflowX: 'unset',
                                overflowY: 'unset',
                                position: 'sticky'
                            }
                        }}
                        sx={{
                            height: '90%',
                            minHeight: '142px',
                            minWidth: '100px',
                            position: 'fixed',
                            width: '20%'
                        }}
                    >
                        <NavigationList/>
                    </Drawer>
                </Box>
            </Box>
        </>
    )
}

export default AppLayout