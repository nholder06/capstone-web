import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/user";

const User = (props) => {
//    const [x, setX]= useState(0)
//     setX(5)

    useEffect(() => {
props.fetchAllUsers()
    }, [])

    return (
        <div>from users</div>);
}

const mapStateToProps = state => ({
        userList: state.user.list
})

const mapActiontoProps = {
    fetchAllUsers : actions.fetchAll
}

export default connect(mapStateToProps, mapActiontoProps)(User);
