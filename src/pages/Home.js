import {useContext} from "react";
import {Typography} from "@mui/material";
import {AppContext} from "../App";
import AppLayout from "../components/AppLayout";
import AppCard from "../components/AppCard";
import {
    CPlainIcon,
    CPlusIcon,
    CSharpIcon,
    ExpressJsIcon,
    FSharpIcon,
    GoLangIcon, GroovyIcon,
    JavaIcon,
    JavaScriptIcon,
    KotlinIcon,
    NextJsIcon,
    NodeJsIcon,
    PythonIcon,
    RubyIcon,
    ScalaIcon,
    SvelteJsIcon,
    SwiftIcon,
    ThreeJsIcon,
    TypescriptIcon,
    VueJsIcon
} from "../components/LanguageIcons";

const Home = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme

    return (
        <>
            <AppLayout>
                <AppCard>
                    <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', height: '10%'}}>
                        <Typography
                            color={appTheme.secondary}
                            fontFamily='-apple-system'
                            fontSize='24px'
                            fontWeight='bold'
                        >Home</Typography>
                    </div>
                    <div style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '1vh',
                        justifyContent: 'center',
                        width: '50%'
                    }}>
                        <CPlainIcon/>
                        <CPlusIcon/>
                        <CSharpIcon/>
                        <ExpressJsIcon/>
                        <FSharpIcon/>
                        <GoLangIcon/>,
                        <GroovyIcon/>,
                        <JavaIcon/>
                        <JavaScriptIcon/>
                        <KotlinIcon/>
                        <NextJsIcon/>
                        <NodeJsIcon/>
                        <PythonIcon/>
                        <RubyIcon/>
                        <ScalaIcon/>
                        <SvelteJsIcon/>
                        <SwiftIcon/>
                        <ThreeJsIcon/>
                        <TypescriptIcon/>
                        <VueJsIcon/>
                    </div>
                </AppCard>
            </AppLayout>
        </>
    )
}

export default Home