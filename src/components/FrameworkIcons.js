let iconSources = {
		android: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
		angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
		django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
		dotnet: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
		embedded: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-plain-wordmark.svg",
		flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
		flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg",
		ios: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
		ktor: "https://avatars.githubusercontent.com/u/28214161?s=280&v=4",
		react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
}

const AndroidIcon = () => <img src={iconSources.android} alt='Android' style={{height: '5vw', width: '5vw'}}/>
const AngularIcon = () => <img src={iconSources.angular} alt='Angular' style={{height: '5vw', width: '5vw'}}/>
const DjangoIcon = () => <img src={iconSources.django} alt='Django' style={{height: '5vw', width: '5vw'}}/>
const DotNetIcon = () => <img src={iconSources.dotnet} alt='.NET' style={{height: '5vw', width: '5vw'}}/>
const EmbeddedCIcon = () => <img src={iconSources.embedded} alt='Embedded C' style={{height: '5vw', width: '5vw'}}/>
const FlaskIcon = () => <img src={iconSources.flask} alt='Flask' style={{height: '5vw', width: '5vw'}}/>
const FlutterIcon = () => <img src={iconSources.flutter} alt='Flutter' style={{height: '5vw', width: '5vw'}}/>
const IosIcon = () => <img src={iconSources.ios} alt='iOS' style={{height: '5vw', width: '5vw'}}/>
const KtorIcon = () => <img src={iconSources.ktor} alt='Ktor' style={{height: '5vw', width: '5vw'}}/>
const ReactIcon = () => <img src={iconSources.react} alt='React' style={{height: '5vw', width: '5vw'}}/>
const SpringIcon = () => <img src={iconSources.spring} alt='Spring' style={{height: '5vw', width: '5vw'}}/>

export {
		AndroidIcon,
		AngularIcon,
		DjangoIcon,
		DotNetIcon,
		EmbeddedCIcon,
		FlaskIcon,
		FlutterIcon,
		IosIcon,
		KtorIcon,
		ReactIcon,
		SpringIcon
}