let iconSources = {
		espresso: 'https://e7.pngegg.com/pngimages/390/563/png-clipart-test-application-test-automation-android-espresso-software-testing-android-android-smile.png',
		jasmine: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg",
		jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
		junit: "https://asset.brandfetch.io/idD7RfhCFS/id3KSPzOxb.png",
		nunit: 'https://avatars.githubusercontent.com/u/2678858?s=280&v=4',
		playwright: 'https://playwright.dev/img/playwright-logo.svg',
		pytest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-plain-wordmark.svg",
		xctest: "https://w7.pngwing.com/pngs/951/722/png-transparent-computer-icons-xcode-ios-tool-s-apple-tool-png-transparent-images-tool.png",
}

const EspressoIcon = () => <img src={iconSources.espresso} alt='Espresso' style={{height: '5vw', width: '5vw'}}/>
const JestIcon = () => <img src={iconSources.jest} alt='Jest' style={{height: '5vw', width: '5vw'}}/>
const JasmineIcon = () => <img src={iconSources.jasmine} alt='Jasmine' style={{height: '5vw', width: '5vw'}}/>
const JUnitIcon = () => <img src={iconSources.junit} alt='JUnit 5' style={{height: '5vw', width: '5vw'}}/>
const NUnitIcon = () => <img src={iconSources.nunit} alt='NUnit' style={{height: '5vw', width: '5vw'}}/>
const PlaywrightIcon = () => <img src={iconSources.playwright} alt='Playwright' style={{height: '5vw', width: '5vw'}}/>
const PyTestIcon = () => <img src={iconSources.pytest} alt='PyTest' style={{height: '5vw', width: '5vw'}}/>
const XcTestIcon = () => <img src={iconSources.xctest} alt='XcTest' style={{height: '5vw', width: '5vw'}}/>

export {
		EspressoIcon,
		JestIcon,
		JasmineIcon,
		JUnitIcon,
		NUnitIcon,
		PlaywrightIcon,
		PyTestIcon,
		XcTestIcon
}
