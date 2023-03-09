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
                    backgroundColor: appTheme.tertiary,
                    color: appTheme.tertiary,
                    height: '100%',
                    outlineColor: appTheme.secondary,
                    outlineWidth: '1px',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        height: '20%',
                        justifyContent: 'center',
                        width: '50%'
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