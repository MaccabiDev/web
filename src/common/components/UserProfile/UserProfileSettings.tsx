import * as React from "react";
import { Redirect } from "react-router-dom";

import { addUser } from "./../../../state/user/usersState";

function UserProfileSettings() {
  const firstNameInput = React.createRef<HTMLInputElement>();
  const lastNameInput = React.createRef<HTMLInputElement>();
  const emailInput = React.createRef<HTMLInputElement>();

  let addNewUser = () => {
    let newUser = {
      firstName: firstNameInput.current?.value,
      lastName: lastNameInput.current?.value,
      email: emailInput.current?.value,
    };
    addUser(newUser);
    return <Redirect to="/user" />;
  };

  return (
    <div>
      Add user:
      <input type="text" ref={firstNameInput} placeholder="First name" />
      <input type="text" ref={lastNameInput} placeholder="Last name" />
      <input type="email" ref={emailInput} placeholder="Email" />
      <input
        type="button"
        value="Add user"
        onClick={() => {
          addNewUser();
        }}
      ></input>
    </div>
  );
}

export default UserProfileSettings;
