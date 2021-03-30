import { Button, Input } from "@material-ui/core";
import * as React from "react";

type Props = {
  saveUser: (user: IUser | any) => void;
};

export const AddUser: React.FC<Props> = ({ saveUser }) => {
  const [user, setUser] = React.useState<IUser | {}>();

  const handleUserData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    saveUser(user);
  };

  return (
    <form onSubmit={addNewUser} className="add-user">
      <Input
        id="firstName"
        placeholder="Enter your first name"
        onChange={handleUserData}
      />
      <Input
        id="lastName"
        placeholder="Enter your last name"
        onChange={handleUserData}
      />
      <Input
        id="email"
        placeholder="Enter your email address"
        onChange={handleUserData}
      />

      <Button
        disabled={user === undefined ? true : false}
        style={{ borderRadius: 30, fontWeight: 100 }}
        variant="contained"
        color="primary"
        onClick={addNewUser}
      >
        Add user
      </Button>
    </form>
  );
};
