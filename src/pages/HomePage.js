import React from "react";
import AuthDataProvider from "../components/AuthDataContext";
import ProfileTable from "../components/ProfileTable";
import { Paper} from "@material-ui/core";
import "../styles/Table.css";

class HomePage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        AuthDataProvider.getAll().then(users => this.setState({ users }));
    }

render(){
    const { user, users } = this.state;
        return (
            <div>
             <h2 className={'h2'}>Hello, {user.fullName}!</h2>
             <h3 className={'register'}>Check out the pets added to PetFriendly: </h3>
                <Paper elevation={3}>
             <ProfileTable />
             {/* {users.loading && <em>Loading users...</em>}
                {users.length &&
                    <ul>
                        {users.map((user, index) =>
                            <li key={user.id}>
                                {user.fullName}
                            </li>
                        )}
                    </ul> */}
                {/* }
     */}
     </Paper>
                </div>
        );
    }
}

export default HomePage;
