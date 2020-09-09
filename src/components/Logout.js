import { useAuthDataContext } from '../reducers/AuthDataContext';


const UserInfo = () => {
    const { user, onLogout } = useAuthDataContext();

    if (!user) {
        return <Link to='/' >Please log in.</Link>
    }

    return (
        <div>
            <p>Hello {user.name}</p>
            <button onClick={onLogout}>Log out</button>
        </div>

    );
};
