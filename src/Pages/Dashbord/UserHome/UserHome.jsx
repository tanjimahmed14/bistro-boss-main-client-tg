import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default UserHome;