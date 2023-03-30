import {useContext} from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {Typography} from "@mui/material";

import {AppContext} from "../../App";
import AppPage from "../../components/AppPage";
import AppLayout from "../../components/AppLayout";
import {DjangoIcon, DotNetIcon, KtorIcon, SpringIcon} from "../../components/FrameworkIcons";
import {CSharpIcon, FSharpIcon, JavaIcon, KotlinIcon, PythonIcon} from "../../components/LanguageIcons";
import {
	SelectUserInterestInEmbedded,
	SelectUserInterestInFunctional,
	SelectUserInterestInMicrosoft,
	SelectUserInterestInModernity,
	SelectUserInterestInWebApps
} from "./BackendRadioGroups";
import ResultCard from "../../components/ResultCard";
import SubmitButton from "../../components/SubmitButton";
import {JUnitIcon, NUnitIcon, PyTestIcon} from "../../components/TestingIcons";

const BackendQuestionnaire = () => {
	let appContext = useContext(AppContext)
	let appTheme = appContext.isDarkThemeActive ? appContext.appThemeDark : appContext.appThemeLight
	let backendState = appContext.backendState
	let setBackendState = appContext.setBackendState
	let pageStyle = appContext.pageStyle
	let pageBodyStyle = appContext.pageBodyStyle
	let pageHeaderStyle = appContext.pageHeaderStyle
	let resultStyle = appContext.resultStyle
	let resultDescriptionStyle = appContext.resultDescriptionStyle
	let resultItemStyle = appContext.resultItemStyle
	
	const generateResults = (event) => {
		event.preventDefault()
		if (backendState.userInterestInMicrosoft === '2'
			&& backendState.userInterestInFunctional === '2'
		) {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription:
						'Developed and maintained by Microsoft, ' +
						'"ASP.NET Core is a cross-platform, high-performance, open-source framework ' +
						'for building modern, cloud-enabled, Internet-connected apps." ' +
						'Read more @ https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core',
					frameworkIcon: <DotNetIcon/>,
					frameworkTitle: '.NET',
					languageDescription:
						'Developed and maintained by Microsoft and the F# Software Foundation, ' +
						'"F# is a JavaScript and .NET language for web, cloud, data-science, apps and more." ' +
						'Read more @ https://fsharp.org/',
					languageIcon: <FSharpIcon/>,
					languageTitle: 'F#',
					testingDescription:
						'Developed by an open-source team and maintained by the .NET Foundation, ' +
						'"NUnit is a unit-testing framework for all .NET languages." ' +
						'Read more @ https://nunit.org/',
					testingIcon: <NUnitIcon/>,
					testingTitle: 'NUnit'
				}
			})
		} else if (backendState.userInterestInMicrosoft === '2'
			&& (backendState.userInterestInFunctional === '1' || backendState.userInterestInFunctional === '0')
		) {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription:
						'Developed and maintained by Microsoft, ' +
						'"ASP.NET Core is a cross-platform, high-performance, open-source framework ' +
						'for building modern, cloud-enabled, Internet-connected apps." ' +
						'Read more @ https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core',
					frameworkIcon: <DotNetIcon/>,
					frameworkTitle: '.NET',
					languageDescription:
						'Developed and maintained by Microsoft, ' +
						'"C# is a modern, object-oriented, and type-safe programming language. ' +
						'C# enables developers to build many types of secure and robust applications that run in .NET." ' +
						'Read more @ https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
					languageIcon: <CSharpIcon/>,
					languageTitle: 'C#',
					testingDescription:
						'Developed by an open-source team and maintained by the .NET Foundation, ' +
						'"NUnit is a unit-testing framework for all .NET languages." ' +
						'Read more @ https://nunit.org/',
					testingIcon: <NUnitIcon/>,
					testingTitle: 'NUnit'
				}
			})
		} else if ((backendState.userInterestInMicrosoft === '0' || backendState.userInterestInMicrosoft === '1')
			&& (backendState.userInterestInWebApps === '1' || backendState.userInterestInWebApps === '2')
			&& ((backendState.userInterestInFunctional === '0' || backendState.userInterestInFunctional === '1')
				|| backendState.userInterestInModernity === '0'
			)
		) {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription:
						'An open source library originally published under an Apache license, ' +
						'"the Spring Framework is a Java platform that provides comprehensive infrastructure support ' +
						'for developing Java applications. Spring handles the infrastructure so you can focus on your application." ' +
						'Read more @ https://docs.spring.io/spring-framework/docs/5.0.0.RC2/spring-framework-reference/overview.html',
					frameworkIcon: <SpringIcon/>,
					frameworkTitle: 'Spring',
					languageDescription:
						'Developed and maintained by Oracle (originally Sun Microsystems), ' +
						'"the Java™ Programming Language is a general-purpose, concurrent, strongly typed, ' +
						'class-based object-oriented language." ' +
						'Read more @ https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html',
					languageIcon: <JavaIcon/>,
					languageTitle: 'Java',
					testingDescription:
						'An open source testing library maintained by the Java community, ' +
						'JUnit is a "programmer-friendly testing framework for Java and the JVM." ' +
						'Read more @ https://github.com/junit-team/junit5/',
					testingIcon: <JUnitIcon/>,
					testingTitle: 'JUnit'
				}
			})
		} else if ((backendState.userInterestInMicrosoft === '0' || backendState.userInterestInMicrosoft === '1')
			&& (backendState.userInterestInWebApps === '1' || backendState.userInterestInWebApps === '2')
			&& (backendState.userInterestInFunctional === '1' || backendState.userInterestInFunctional === '2')
			&& (backendState.userInterestInModernity === '1')
		) {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription:
						'An open source library originally published under an Apache license, ' +
						'"the Spring Framework is a Java platform that provides comprehensive infrastructure support ' +
						'for developing Java applications. Spring handles the infrastructure so you can focus on your application." ' +
						'Read more @ https://docs.spring.io/spring-framework/docs/5.0.0.RC2/spring-framework-reference/overview.html',
					frameworkIcon: <SpringIcon/>,
					frameworkTitle: 'Spring',
					languageDescription:
						'Developed and maintained by JetBrains (IntelliJ, PyCharm), ' +
						'"Kotlin is a modern but already mature programming language aimed to make developers happier. ' +
						'It\'s concise, safe, interoperable with Java and other languages, and ' +
						'provides many ways to reuse code between multiple platforms for productive programming." ' +
						'Read more @ https://kotlinlang.org/docs/getting-started.html',
					languageIcon: <KotlinIcon/>,
					languageTitle: 'Kotlin',
					testingDescription:
						'An open source testing library maintained by the Java community, ' +
						'JUnit is a "programmer-friendly testing framework for Java and the JVM." ' +
						'Read more @ https://github.com/junit-team/junit5/',
					testingIcon: <JUnitIcon/>,
					testingTitle: 'JUnit'
				}
			})
		} else if ((backendState.userInterestInMicrosoft === '0' || backendState.userInterestInMicrosoft === '1')
			&& (backendState.userInterestInWebApps === '1' || backendState.userInterestInWebApps === '2')
			&& (backendState.userInterestInFunctional === '1' || backendState.userInterestInFunctional === '2')
			&& (backendState.userInterestInModernity === '2')
		) {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription:
						'Developed and maintained by JetBrains (IntelliJ, PyCharm), ' +
						'"Ktor is a framework to easily build connected applications - ' +
						'web applications, HTTP services, mobile and browser applications." ' +
						'Read more @ https://ktor.io/docs/welcome.html',
					frameworkIcon: <KtorIcon/>,
					frameworkTitle: 'Ktor',
					languageDescription:
						'Developed and maintained by JetBrains (IntelliJ, PyCharm), ' +
						'"Kotlin is a modern but already mature programming language aimed to make developers happier. ' +
						'It\'s concise, safe, interoperable with Java and other languages, and ' +
						'provides many ways to reuse code between multiple platforms for productive programming." ' +
						'Read more @ https://kotlinlang.org/docs/getting-started.html',
					languageIcon: <KotlinIcon/>,
					languageTitle: 'Kotlin',
					testingDescription: 'Developed and maintained by JetBrains (IntelliJ, PyCharm), ' +
						'"the kotlin.test library provides annotations to mark test functions and ' +
						'a set of utility functions for performing assertions in tests." ' +
						'Read more @ https://kotlinlang.org/api/latest/kotlin.test/',
					testingIcon: <KotlinIcon/>,
					testingTitle: 'Kotlin Test'
				}
			})
		} else {
			setBackendState({
				...backendState,
				pageContent: 'results',
				resultStatus: {
					frameworkDescription:
						'An open-source framework developed and maintained by the Django Software Foundation, ' +
						'"Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design." ' +
						'Read more @ https://www.djangoproject.com/',
					frameworkIcon: <DjangoIcon/>,
					frameworkTitle: 'Django',
					languageDescription:
						'Developed and maintained by the Python Software Foundation, ' +
						'"Python is an easy to learn, powerful programming language. ' +
						'It has efficient high-level data structures and ' +
						'a simple but effective approach to object-oriented programming." ' +
						'Read more @ https://docs.python.org/3/tutorial/index.html',
					languageIcon: <PythonIcon/>,
					languageTitle: 'Python',
					testingDescription:
						'A testing framework developed by the Python community, ' +
						'"the pytest framework makes it easy to write small, readable tests, ' +
						'and can scale to support complex functional testing for applications and libraries." ' +
						'Read more @ https://docs.pytest.org/en/7.2.x/',
					testingIcon: <PyTestIcon/>,
					testingTitle: 'pytest'
				}
			})
		}
	}
	
	const resetPage = (event) => {
		event.preventDefault()
		setBackendState({
			...backendState,
			pageContent: 'quiz',
			resultStatus: {
				frameworkDescription: '',
				frameworkIcon: <></>,
				frameworkTitle: '',
				languageDescription: '',
				languageIcon: <></>,
				languageTitle: '',
				testingDescription: '',
				testingIcon: <></>,
				testingTitle: ''
			}
		})
	}
	
	return (
		<>
			<AppLayout>
				<AppPage>
					<div style={pageStyle}>
						<div style={pageHeaderStyle}>
							<Typography
								color={appTheme.secondary}
								fontFamily='-apple-system'
								fontSize='2.5vh'
								fontWeight='bold'
							>Backend</Typography>
							{backendState.pageContent === 'quiz'
								? <SubmitButton
									buttonIcon={<TaskAltIcon/>}
									buttonLabel='Submit'
									isDisabled={false}
									onClick={generateResults}
								/>
								: <SubmitButton
									buttonIcon={<RestartAltIcon/>}
									buttonLabel={'Try Again'}
									isDisabled={backendState.pageContent === 'quiz'}
									onClick={resetPage}
								/>
							}
						</div>
						{backendState.pageContent === 'quiz'
							? <div>
								<SelectUserInterestInEmbedded
									userInterestInEmbedded={backendState.userInterestInEmbedded}
									setUserInterestInEmbedded={(newState) => {
										setBackendState({
											...backendState,
											userInterestInEmbedded: newState
										})
									}}
								/>
								<SelectUserInterestInFunctional
									userInterestInFunctional={backendState.userInterestInFunctional}
									setUserInterestInFunctional={(newState) => {
										setBackendState({
											...backendState,
											userInterestInFunctional: newState
										})
									}}
								/>
								<SelectUserInterestInMicrosoft
									userInterestInMicrosoft={backendState.userInterestInMicrosoft}
									setUserInterestInMicrosoft={(newState) => {
										setBackendState({
											...backendState,
											userInterestInMicrosoft: newState
										})
									}}
								/>
								<SelectUserInterestInModernity
									userInterestInModernity={backendState.userInterestInModernity}
									setUserInterestInModernity={(newState) => {
										setBackendState({
											...backendState,
											userInterestInModernity: newState
										})
									}}
								/>
								<SelectUserInterestInWebApps
									userInterestInWebApps={backendState.userInterestInWebApps}
									setUserInterestInWebApps={(newState) => {
										setBackendState({
											...backendState,
											userInterestInWebApps: newState
										})
									}}
								/>
							</div>
							: <div style={pageBodyStyle}>
								<ResultCard>
									<div style={resultStyle}>
										<div style={resultItemStyle}>
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												Framework
											</Typography>
											{backendState.resultStatus.frameworkIcon}
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												{backendState.resultStatus.frameworkTitle}
											</Typography>
										</div>
										<div style={resultDescriptionStyle}>
											<Typography
												align='center'
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='1.5vh'
												fontWeight='normal'
											>
												{backendState.resultStatus.frameworkDescription}
											</Typography>
										</div>
									</div>
								</ResultCard>
								<ResultCard>
									<div style={resultStyle}>
										<div style={resultItemStyle}>
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												Language
											</Typography>
											{backendState.resultStatus.languageIcon}
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												{backendState.resultStatus.languageTitle}
											</Typography>
										</div>
										<div style={resultDescriptionStyle}>
											<Typography
												align='center'
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='1.5vh'
												fontWeight='normal'
											>
												{backendState.resultStatus.languageDescription}
											</Typography>
										</div>
									</div>
								</ResultCard>
								<ResultCard>
									<div style={resultStyle}>
										<div style={resultItemStyle}>
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												Testing
											</Typography>
											{backendState.resultStatus.testingIcon}
											<Typography
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='2vh'
												fontWeight='bold'
											>
												{backendState.resultStatus.testingTitle}
											</Typography>
										</div>
										<div style={resultDescriptionStyle}>
											<Typography
												align='center'
												color={appTheme.secondary}
												fontFamily='-apple-system'
												fontSize='1.5vh'
												fontWeight='normal'
											>
												{backendState.resultStatus.testingDescription}
											</Typography>
										</div>
									</div>
								</ResultCard>
							</div>
						}
					</div>
				</AppPage>
			</AppLayout>
		</>
	)
}

export default BackendQuestionnaire