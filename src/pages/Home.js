import { useQuery } from '@tanstack/react-query';
import Axios from "axios";
import { useContext } from 'react';
import { AppContext } from '../App';

export const Home =() => {
    const { username } = useContext(AppContext);
    const { data: catData, isLoading, refetch } = useQuery(["cat"], 
        () => {
           return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        });
    
        if (isLoading) {
            return <h1> Loading... </h1>
        }

    return (
        <div>
            <h1>This is the homepage and the user is: {username}</h1>
            <p> { catData.fact } </p> 
            <button onClick={ refetch }> Update Data </button>
        </div>
    )
}