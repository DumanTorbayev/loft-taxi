import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    gap: {
        gap: '0 24px'
    },
    formControl: {
        width: 'calc(50% - 12px)'
    },
    btnPreloader: {
        position: 'absolute',
        top: 'calc(50% - 12.5px)',
        left: 'calc(50% - 12.5px)',
        marginRight: '16px',
        color: '#FDBF5A',
    }
})