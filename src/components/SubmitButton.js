import {Button} from "@mui/material";

const SubmitButton = ({buttonIcon, buttonLabel, isDisabled, onClick}) => {
    return (
        <Button
            endIcon={buttonIcon}
            disabled={isDisabled}
            onClick={onClick}
            variant='outlined'
        >{buttonLabel}</Button>
    )
}

export default SubmitButton