import * as React from "react";

import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { User } from "./common/components/UserProfile/User";
import { AddUser } from "./common/components/UserProfile/AddUser";
import {
  addUser,
  removeUser,
  updateUser,
} from "./state/user/userActionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const users: readonly IUser[] = useSelector(
    (state: UserState) => state.users,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveUser = React.useCallback((user: IUser) => dispatch(addUser(user)), [
    dispatch,
  ]);

  return (
    <main style={mainStyle}>
      <h1>Users</h1>
      <AddUser saveUser={saveUser} />
      {users.map((user: IUser) => (
        <div>
          <User
            key={user.id}
            user={user}
            removeUser={removeUser}
            updateUser={updateUser}
          />
        </div>
      ))}
    </main>
  );
};

const mainStyle = {
  margin: 30,
};

export default App;
