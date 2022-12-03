import { useContext } from 'react';
import { AppContext } from '../App';
import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = () => {

    const {username} = useContext(AppContext);

    return (
        <div>
            <h1>Profile, user is: {username}</h1>
            <ChangeProfile/>
        </div>
    )
}