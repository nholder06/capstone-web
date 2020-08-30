import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/user";

const User = (props) => {
  //  const [x, setX]= useState(0)

    useEffect(() =>{
props.fetchAllUsers()
    }, [])

    return (
        <div>from users</div>);
}

const mapStateToProps = state => ({
        userList: state.User.list
})

const mapActionstoProps ={
    fetchAllUsers : actions.fetchAll
}

export default connect()(User);
