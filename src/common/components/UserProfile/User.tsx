import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

type Props = {
  user: IUser;
  removeUser: (user: IUser) => void;
  updateUser: (user: IUser | any) => void;
};

export const User: React.FC<Props> = ({ user, removeUser, updateUser }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteUser = React.useCallback(
    (user: IUser) => dispatch(removeUser(user)),
    [dispatch, removeUser]
  );

  const setUser = React.useCallback(
    (user: IUser) => dispatch(updateUser(user)),
    [dispatch, updateUser]
  );

  return (
    <div className="user">
      <div>
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
        <p>{user.email}</p>
      </div>
      <Button
        style={{ borderRadius: 30, fontWeight: 100 }}
        variant="contained"
        color="primary"
        onClick={() => {
          deleteUser(user);
        }}
      >
        Delete user
      </Button>
      <Button
        style={{ borderRadius: 30, fontWeight: 100 }}
        variant="contained"
        color="primary"
        onClick={() => {
          setUser(user);
        }}
      >
        Update user
      </Button>
    </div>
  );
};
