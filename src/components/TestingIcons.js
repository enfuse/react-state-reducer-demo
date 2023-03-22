let iconSources = {
		espresso: 'https://e7.pngegg.com/pngimages/390/563/png-clipart-test-application-test-automation-android-espresso-software-testing-android-android-smile.png',
		jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
		junit: "https://asset.brandfetch.io/idD7RfhCFS/id3KSPzOxb.png",
		kotlin: "",
		nunit: 'https://avatars.githubusercontent.com/u/2678858?s=280&v=4',
		pytest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-plain-wordmark.svg"
}

const EspressoIcon = () => <img src={iconSources.espresso} alt='Espresso' style={{height: '5vw', width: '5vw'}}/>
const JestIcon = () => <img src={iconSources.jest} alt='Jest' style={{height: '5vw', width: '5vw'}}/>
const JUnitIcon = () => <img src={iconSources.junit} alt='JUnit 5' style={{height: '5vw', width: '5vw'}}/>
const NUnitIcon = () => <img src={iconSources.nunit} alt='NUnit' style={{height: '5vw', width: '5vw'}}/>
const PyTestIcon = () => <img src={iconSources.pytest} alt='PyTest' style={{height: '5vw', width: '5vw'}}/>

export {
		EspressoIcon,
		JestIcon,
		JUnitIcon,
		NUnitIcon,
		PyTestIcon
}
