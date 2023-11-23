import React, { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

type SecondaryButtonProps = {
    onClick: MouseEventHandler,
    buttonText: string
};

const SecondaryButton = ({onClick, buttonText}: SecondaryButtonProps) => {
    return (
        <Button id="secondaryButton" onClick={onClick} variant="outlined">
            {buttonText}
        </Button>
    );
}

export default SecondaryButton;