import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button'

function UsersList() {

    const dispatch = useDispatch(); 
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    });

    useEffect( () => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleUserAdd = () => {
        dispatch(addUser());
    }

    if ( isLoading )
        return (<Skeleton times={5} className="h-10 w-full" />);
    
    if ( error )
        return (<div>Error fetching data ...</div>);

    const renderedUsers = data.map( (user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        )
    });
    return (
        <div>    
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button onClick={handleUserAdd}>
                    + Add User
                </Button>
            </div>
            {renderedUsers}
        </div>
    );
}

export default UsersList;