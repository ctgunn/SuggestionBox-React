import * as React from 'react';
import Button from '@mui/material/Button';

// interface ButtonProps: {
//     text: string
// }
export default function PrimaryButton(text) {
    return <Button variant="contained">{text}</Button>;
}