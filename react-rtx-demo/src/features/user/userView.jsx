import React, { useEffect } from 'react'
import { fetchusers } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'
const UserView = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    useEffect(()=>{
        dispatch(fetchusers());
    },[])
    if(user.loading){
        return(
            <div>loading...</div>
        )
    }
    if(!user.loading && user.error.length>0){
        return(
            <div>{user.error}</div>
        )
    }
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {user.users.map((u)=>(
            <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserView
