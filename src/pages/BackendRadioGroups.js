import {useContext} from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

import {AppContext} from "../App";
import {SELECTIONS} from "../App";

const SelectUserInterestInEmbedded = ({userInterestInEmbedded, setUserInterestInEmbedded}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    let radioLabelProps = {
        color: appTheme.secondary,
        fontFamily: '-apple-system',
        fontSize: '1.75vh',
        fontWeight: 'regular'
    }

    return (
        <FormControl>
            <FormLabel id="embedded-selection-label" sx={{
                color: radioLabelProps.color,
                fontFamily: radioLabelProps.fontFamily,
                fontSize: radioLabelProps.fontSize,
                fontWeight: 'bold',
                '&.Mui-focused': {color: appTheme.secondary}
            }}>Are you interested in working with embedded systems?</FormLabel>
            <RadioGroup
                aria-labelledby="embedded-selection-label"
                name="embedded-selection"
                onChange={(event) => setUserInterestInEmbedded(event.target.value)}
                row={true}
                value={userInterestInEmbedded}
            >
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I am not interested in embedded systems"
                    value={SELECTIONS.NOT_INTERESTED}
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I'm slightly interested in embedded systems"
                    value={SELECTIONS.SLIGHTLY_INTERESTED}
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I'm very interested in embedded systems"
                    value={SELECTIONS.VERY_INTERESTED}
                />
            </RadioGroup>
        </FormControl>
    )
}

const SelectUserInterestInFunctional = ({userInterestInFunctional, setUserInterestInFunctional}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    let radioLabelProps = {
        color: appTheme.secondary,
        fontFamily: '-apple-system',
        fontSize: '1.75vh',
        fontWeight: 'regular'
    }

    return (
        <FormControl>
            <FormLabel id="functional-selection-label" sx={{
                color: radioLabelProps.color,
                fontFamily: radioLabelProps.fontFamily,
                fontSize: radioLabelProps.fontSize,
                fontWeight: 'bold',
                '&.Mui-focused': {color: appTheme.secondary}
            }}>Do you prefer to use functional or object-oriented programming?</FormLabel>
            <RadioGroup
                aria-labelledby="functional-selection-label"
                name="functional-selection"
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
                    value={SELECTIONS.NOT_INTERESTED}
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
                    value={SELECTIONS.SLIGHTLY_INTERESTED}
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
                    value={SELECTIONS.VERY_INTERESTED}
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
        fontSize: '1.75vh',
        fontWeight: 'regular'
    }

    return (
        <FormControl>
            <FormLabel id="microsoft-selection-label" sx={{
                color: radioLabelProps.color,
                fontFamily: radioLabelProps.fontFamily,
                fontSize: radioLabelProps.fontSize,
                fontWeight: 'bold',
                '&.Mui-focused': {color: appTheme.secondary}
            }}>Would you be willing to frequently use Microsoft products?</FormLabel>
            <RadioGroup
                aria-labelledby="microsoft-selection-label"
                name="microsoft-selection"
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
                    value={SELECTIONS.NOT_INTERESTED}
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
                    value={SELECTIONS.SLIGHTLY_INTERESTED}
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
                    value={SELECTIONS.VERY_INTERESTED}
                />
            </RadioGroup>
        </FormControl>
    )
}

const SelectUserInterestInModernity = ({userInterestInModernity, setUserInterestInModernity}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    let radioLabelProps = {
        color: appTheme.secondary,
        fontFamily: '-apple-system',
        fontSize: '1.75vh',
        fontWeight: 'regular'
    }

    return (
        <FormControl>
            <FormLabel id="modernity-selection-label" sx={{
                color: radioLabelProps.color,
                fontFamily: radioLabelProps.fontFamily,
                fontSize: radioLabelProps.fontSize,
                fontWeight: 'bold',
                '&.Mui-focused': {color: appTheme.secondary}
            }}>Would you prefer using tools released within the last ~5 years?</FormLabel>
            <RadioGroup
                aria-labelledby="modernity-selection-label"
                name="modernity-selection"
                onChange={(event) => setUserInterestInModernity(event.target.value)}
                row={true}
                value={userInterestInModernity}
            >
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I prefer to use older tools"
                    value={SELECTIONS.NOT_INTERESTED}
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I have no preference"
                    value={SELECTIONS.SLIGHTLY_INTERESTED}
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I prefer to use newer tools"
                    value={SELECTIONS.VERY_INTERESTED}
                />
            </RadioGroup>
        </FormControl>
    )
}

const SelectUserInterestInWebApps = ({userInterestInWebApps, setUserInterestInWebApps}) => {
    let appContext = useContext(AppContext)
    let appTheme = appContext.isDarkThemeActive ? appContext.darkTheme : appContext.lightTheme
    let radioLabelProps = {
        color: appTheme.secondary,
        fontFamily: '-apple-system',
        fontSize: '1.75vh',
        fontWeight: 'regular'
    }

    return (
        <FormControl>
            <FormLabel id="selection-four-label" sx={{
                color: radioLabelProps.color,
                fontFamily: radioLabelProps.fontFamily,
                fontSize: radioLabelProps.fontSize,
                fontWeight: 'bold',
                '&.Mui-focused': {color: appTheme.secondary}
            }}>Are you interested in building web applications?</FormLabel>
            <RadioGroup
                aria-labelledby="selection-four-label"
                name="selection-four"
                onChange={(event) => setUserInterestInWebApps(event.target.value)}
                row={true}
                value={userInterestInWebApps}
            >
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I am not interested in building web apps"
                    value={SELECTIONS.NOT_INTERESTED}
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I'm slightly interested in building web apps"
                    value={SELECTIONS.SLIGHTLY_INTERESTED}
                />
                <FormControlLabel
                    componentsProps={{typography: radioLabelProps}}
                    control={
                        <Radio sx={{
                            color: appTheme.secondary,
                            '&.Mui-checked': {color: appTheme.secondary}
                        }}/>
                    }
                    label="I'm very interested in building web apps"
                    value={SELECTIONS.VERY_INTERESTED}
                />
            </RadioGroup>
        </FormControl>
    )
}

export {
    SelectUserInterestInEmbedded,
    SelectUserInterestInFunctional,
    SelectUserInterestInMicrosoft,
    SelectUserInterestInModernity,
    SelectUserInterestInWebApps
}