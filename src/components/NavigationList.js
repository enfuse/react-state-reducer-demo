import {useNavigate} from "react-router-dom";
import {List, ListItem} from "@mui/material";
import NavigationButton from "./NavigationButton";
import {useContext} from "react";
import {AppContext} from "../App";

const NavigationList = () => {
    let appContext = useContext(AppContext)
    let navigate = useNavigate()

    return (
        <List>
            <ListItem>
                <NavigationButton
                    buttonTitle='Home'
                    onClick={() => {
                        navigate('/home')
                    }}
                />
            </ListItem>
            <ListItem>
                <NavigationButton
                    buttonTitle='Backend'
                    onClick={() => {
                        navigate('/backend')
                    }}
                />
            </ListItem>
            <ListItem>
                <NavigationButton
                    buttonTitle='Frontend'
                    onClick={() => {
                        navigate('/frontend')
                    }}
                />
            </ListItem>
            <ListItem>
                <NavigationButton
                    buttonTitle='Mobile'
                    onClick={() => {
                        navigate('/mobile')
                    }}
                />
            </ListItem>
            {appContext.frontendState.pageContent === 'results'
                && appContext.mobileState.pageContent === 'results'
                && <ListItem>
                    <NavigationButton
                        buttonTitle='Summary'
                        onClick={() => {
                          navigate('/summary')
                        }}
                    />
                </ListItem>
            }
        </List>
    )
}

export default NavigationList