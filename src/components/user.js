import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/user";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles } from "@material-ui/core";
import UsersForm from "./usersform";

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin : theme.spacing(2),
        padding : theme.spacing(2)
    }
})

const User = ({classes, ...props}) => {
//    const [x, setX]= useState(0)
//     setX(5)

    useEffect(() => {
props.fetchAllUsers()
    }, [])

    return (
        <Paper className={classes.paper} elevation={3}>
        {<Grid container>
            <Grid item xs={6}>
                <UsersForm />
            </Grid>
            <Grid item xs={6}>
                <TableContainer>
                    <Table>
                        <TableHead className={classes.root}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
        <TableBody>
            {props.userList.map((record, index) => {
                return (<TableRow key={index} hover>
                    <TableCell>{record.fullName}</TableCell>
                    <TableCell>{record.email}</TableCell>
                </TableRow>)
            })}
            </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
    </Grid>}
        </Paper>
    );
}

const mapStateToProps = state => ({
        userList: state.user.list
})

const mapActiontoProps = {
    fetchAllUsers : actions.fetchAll
}

export default connect(mapStateToProps, mapActiontoProps)(withStyles(styles)(User));
