import {useContext} from "react";
import {Card, Typography} from "@mui/material";
import {AppContext} from "../App";
import AppLayout from "../components/AppLayout";

const Home = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <>
            <AppLayout>
                <Card elevation={1} sx={{
                    alignItems: 'center',
                    backgroundColor: appTheme.tertiary,
                    color: appTheme.tertiary,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'flex-start',
                    outlineColor: appTheme.secondary,
                    outlineWidth: '1px',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        height: '10%',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <Typography color={appTheme.secondary} fontSize='24px' fontWeight='bold'>
                            Home
                        </Typography>
                    </div>
                </Card>
            </AppLayout>
        </>
    )
}

export default Home