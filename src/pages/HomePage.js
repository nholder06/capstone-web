import React from "react";
import { Link } from 'react-router-dom';
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
             <h2 className={'greeting'}>Hello, {user.fullName}!</h2>
             <h3 className={'h3'}>Check out the pets added to PetFriendly: </h3>
             <div className={'profileTable'}>
             <ProfileTable />
             <div>
             {/* {users.loading && <em>Loading users...</em>}
                {users.length &&
                    <ul className={'scroll'}>
                        {users.map((user, index) =>
                            <li key={user.id}>
                            <Link to="userpet">
                                {user.fullName}
                            </Link>
                            </li>
                        )}
                    </ul> } */}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
