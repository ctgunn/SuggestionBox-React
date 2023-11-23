import React, { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

type PrimaryButtonProps = {
    onClick: MouseEventHandler,
    buttonText: string
};

const PrimaryButton = ({onClick, buttonText}: PrimaryButtonProps) => {
    return (
        <Button id="primaryButton" onClick={onClick} variant="contained">
            {buttonText}
        </Button>
    );
};

export default PrimaryButton;