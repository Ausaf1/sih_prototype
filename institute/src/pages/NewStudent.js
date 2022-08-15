import React from 'react'
import EmployeeForm from "./NewStudentForm";

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function NewStudent() {

    const classes = useStyles();

    return (
        <>
           
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
    )
}