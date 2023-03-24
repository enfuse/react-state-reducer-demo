import {useContext} from "react";
import {Typography} from "@mui/material";

import {AppContext} from "../App";
import AppPage from "../components/AppPage";
import AppLayout from "../components/AppLayout";
import {
    CPlainIcon,
    CPlusIcon,
    CSharpIcon,
    ExpressJsIcon,
    FSharpIcon,
    GoLangIcon,
    GroovyIcon,
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

const HomePage = () => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.appThemeDark : appContext.appThemeLight

    return (
        <>
            <AppLayout>
                <AppPage>
                    <div style={appContext.pageStyle}>
                        <Typography
                            color={appTheme.secondary}
                            fontFamily='-apple-system'
                            fontSize='2.5vh'
                            fontWeight='bold'
                        >
                            Home
                        </Typography>
                        <Typography
                            color={appTheme.secondary}
                            fontFamily='-apple-system'
                            fontSize='2vh'
                            fontWeight='normal'
                        >
                            Welcome to the Toolkit Builder!
                            This application was designed to help developers choose the right tools for the job.
                            Each page will contain a questionnaire that will guide you through the process.
                            Once submitted, each questionnaire will be used to generate a toolkit for the related stack.
                        </Typography>
                    </div>
                    <div style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '1vh',
                        height: '50%',
                        justifyContent: 'center',
                        width: '75%'
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
                </AppPage>
            </AppLayout>
        </>
    )
}

export default HomePage