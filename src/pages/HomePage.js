import React from "react";
import AuthDataProvider from "../components/AuthDataContext";
import { Navigation} from "../components/Navigation"
import ProfileTable from "../components/ProfileTable";
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
    const { user } = this.state;
        return (
            <div>
            <Navigation isLoggedIn={true} />
            <div className={'container'}>
             <h2 className={'greeting'}>Hello, {user.fullName}!</h2>
             <h3 className={'h3'}>Check out the pets added to PetFriendly: </h3>
             <div className={'profileTable'}>
             <ProfileTable />
                </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
