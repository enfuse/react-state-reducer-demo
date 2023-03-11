import {useContext} from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

import {AppContext} from "../App";

const SelectUserInterestInFunctional = ({userInterestInFunctional, setUserInterestInFunctional}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    let radioLabelProps = {
        color: appTheme.secondary,
        fontFamily: '-apple-system',
        fontSize: '2vh',
        fontWeight: 'regular'
    }

    return (
        <FormControl>
            <FormLabel id="selection-one-label" sx={{
                color: radioLabelProps.color,
                fontFamily: radioLabelProps.fontFamily,
                fontSize: radioLabelProps.fontSize,
                fontWeight: 'bold',
                '&.Mui-focused': {color: appTheme.secondary}
            }}>Do you prefer to use functional or object-oriented programming?</FormLabel>
            <RadioGroup
                aria-labelledby="selection-one-label"
                name="selection-one"
                onChange={(event) => setUserInterestInFunctional(event.target.value)}
                row={true}
                value={userInterestInFunctional}
            >
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I prefer to use object-oriented"
                    value="Not Interested"
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I prefer to use both options"
                    value="Slightly Interested"
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I prefer to use functional"
                    value="Very Interested"
                />
            </RadioGroup>
        </FormControl>
    )
}

const SelectUserInterestInMicrosoft = ({userInterestInMicrosoft, setUserInterestInMicrosoft}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    let radioLabelProps = {
        color: appTheme.secondary,
        fontFamily: '-apple-system',
        fontSize: '2vh',
        fontWeight: 'regular'
    }

    return (
        <FormControl>
            <FormLabel id="selection-two-label" sx={{
                color: radioLabelProps.color,
                fontFamily: radioLabelProps.fontFamily,
                fontSize: radioLabelProps.fontSize,
                fontWeight: 'bold',
                '&.Mui-focused': {color: appTheme.secondary}
            }}>Would you be willing to frequently use Microsoft products?</FormLabel>
            <RadioGroup
                aria-labelledby="selection-two-label"
                name="selection-two"
                onChange={(event) => setUserInterestInMicrosoft(event.target.value)}
                row={true}
                value={userInterestInMicrosoft}
            >
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I refuse to use Microsoft products"
                    value="Not Interested"
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I wouldn't mind using Microsoft products"
                    value="Slightly Interested"
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I love using Microsoft products"
                    value="Very Interested"
                />
            </RadioGroup>
        </FormControl>
    )
}

export {
    SelectUserInterestInFunctional,
    SelectUserInterestInMicrosoft
}