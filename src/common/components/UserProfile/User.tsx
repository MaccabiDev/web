import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";

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
    (user: IUser) => {
      dispatch(updateUser(user));
    },
    [dispatch, updateUser]
  );

  const handleUserDataEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <div>
      <div style={headerStyle}>
        <h4>{`${user.firstName} ${user.lastName}`}</h4>
        <Input
          id="email"
          placeholder="Enter your email address"
          onChange={handleUserDataEmail}
          value={user.email}
          key={user.id}
          style={{ width: 450 }}
        />
      </div>
      <div>
        <Button
          style={buttonStyle}
          variant="contained"
          color="primary"
          onClick={() => {
            deleteUser(user);
          }}
        >
          Delete user
        </Button>
        <Button
          style={buttonStyle}
          variant="contained"
          color="primary"
          onClick={() => {
            setUser(user);
          }}
        >
          Update user
        </Button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: 10,
  borderRadius: 30,
  fontWeight: 50,
  fontSize: 12,
  width: 200,
  heigh: 30,
  cursor: "pointer",
};

const headerStyle = {
  margin: 10,
};
