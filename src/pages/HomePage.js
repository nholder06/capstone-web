import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../services'

class HomePage extends React.Component {
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
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
            <div>
                <h1>PetFriendly</h1>  
                </div>          
                    <div className=''>
             <h2>Hello, {user.fullName}!</h2>
             <h3>Check out who else is using PetFriendly: </h3>
                {users.loading && <em> Loading users...</em>}
                {users.length &&
                 <ul>
                     {users.map((user, index) =>
                     <li key={user.id}>
                         {user.fullName}
                     </li>
                     )}
                     </ul>
                     }
                     <p>
                         <Link to='/login'>Logout</Link>
                     </p>
                </div>
        );
    }
}

export { HomePage };