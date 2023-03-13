import {Button} from "@mui/material";

const SubmitButton = ({buttonIcon, buttonLabel, isDisabled, onClick}) => {
    return (
        <Button
            endIcon={buttonIcon}
            isDisabled={isDisabled}
            onClick={onClick}
            variant='outlined'
        >{buttonLabel}</Button>
    )
}

export default SubmitButton