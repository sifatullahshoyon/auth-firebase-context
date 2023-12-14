import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';


const Home = () => {
    const {user} = useContext(AuthContext);
    // console.log(user)
    return (
        <div>
            <h1>this is home components  {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;