import React from "react";
import AuthDataProvider from "../components/AuthDataContext";

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
             <h2>Hello, {user.fullName}!</h2>
             <h3>Check out who else is using PetFriendly: </h3>
             {users.loading && <em>Loading users...</em>}
                {users.length &&
                    <ul>
                        {users.map((user, index) =>
                            <li key={user.id}>
                                {user.fullName}
                            </li>
                        )}
                    </ul>
                }
    
                </div>
        );
    }
}

export default HomePage;
