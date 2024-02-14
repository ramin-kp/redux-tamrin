import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/usersSlice";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (users.loading) return <h1>loading ...</h1>;
  return (
    <div>
      {users.users.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Users;
