import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: blue,
        secondary: lightBlue,
    },
    props: {
        MuiButton: {
            size: 'small',
        },
        MuiFilledInput: {
            margin: 'dense',
        },
        MuiFormControl: {
            margin: 'dense',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiListItem: {
            dense: true,
        },
        MuiOutlinedInput: {
            margin: 'dense',
        },
        MuiFab: {
            size: 'small',
        },
        MuiTable: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
        },
        MuiToolbar: {
            variant: 'dense',
        },
    },
    overrides: {
        MuiIconButton: {
            sizeSmall: {
                // Adjust spacing to reach minimal touch target hitbox
                marginLeft: 4,
                marginRight: 4,
                padding: 12,
            },
        },
    },
});

