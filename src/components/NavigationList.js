import {useNavigate} from "react-router-dom";
import {List, ListItem} from "@mui/material";
import NavigationButton from "./NavigationButton";

const NavigationList = () => {
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
        </List>
    )
}

export default NavigationList