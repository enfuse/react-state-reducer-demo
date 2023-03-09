import {useContext} from "react";
import {Card, Typography} from "@mui/material";
import {AppContext} from "../App";
import AppLayout from "../components/AppLayout";
import AppCard from "../components/AppCard";

const Home = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <>
            <AppLayout>
                <AppCard>
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
                </AppCard>
            </AppLayout>
        </>
    )
}

export default Home