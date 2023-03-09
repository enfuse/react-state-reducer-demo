import {useReducer} from "react";
import {frontendStateReducer} from "./FrontendQuestionnaireState";

const FrontendQuestionnaire = () => {
    const [frontendState, frontendDispatch] = useReducer(frontendStateReducer, {}, undefined);
    return (<></>)
}

export default FrontendQuestionnaire