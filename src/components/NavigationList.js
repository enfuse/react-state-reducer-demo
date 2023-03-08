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
        </List>
    )
}

export default NavigationList