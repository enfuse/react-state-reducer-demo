import AppLayout from "../components/AppLayout";
import AppPage from "../components/AppPage";
import {useContext} from "react";
import {AppContext} from "../App";

const SummaryPage = () => {
		let appContext = useContext(AppContext)
		let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
	
		return (
				<>
						<AppLayout>
								<AppPage>
										<div style={appContext.pageStyle}>
												Summary Page
										</div>
								</AppPage>
						</AppLayout>
				</>
		)
}

export default SummaryPage