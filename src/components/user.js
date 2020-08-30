import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/user";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TextField } from "@material-ui/core";
import UsersForm from "./Usersform";

const User = (props) => {
//    const [x, setX]= useState(0)
//     setX(5)

    useEffect(() => {
props.fetchAllUsers()
    }, [])

    return (
    //     <Paper>
    //     {<Grid container>
    //         <Grid item xs={6}>
    //             <UsersForm />
    //         </Grid>
    //         <Grid item xs={6}>
    //             <TableContainer>
    //                 <Table>
    //                     <TableHead>
    //                         <TableRow>
    //                             <TableCell>Name</TableCell>
    //                             <TableCell>Email</TableCell>
    //                         </TableRow>
    //                     </TableHead>
    //                 </Table>
    //             </TableContainer>
    //         </Grid>
    // </Grid>}
    //     </Paper>
    );
}

const mapStateToProps = state => ({
        userList: state.user.list
})

const mapActiontoProps = {
    fetchAllUsers : actions.fetchAll
}

export default connect(mapStateToProps, mapActiontoProps)(User);
