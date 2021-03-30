import * as UserActions from "./userActionsTypes";

const initialState: UserState = {
  users: [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "j@s.com",
      isUserProfileUpdated: false,
    },
    { id: 2, firstName: "Guy", lastName: "Show", email: "g@s.com", isUserProfileUpdated: false },
    { id: 3, firstName: "Bob", lastName: "Sand", email: "b@s.com", isUserProfileUpdated: false },
  ],
};

const reducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActions.ADD_USER:
      const addUser: IUser = {
        id: state.users.length + 1, // not really unique
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        isUserProfileUpdated: false,
      };
      return {
        ...state,
        users: state.users.concat(addUser),
      };
    case UserActions.REMOVE_USER:
      const updatedUsers: IUser[] = state.users.filter(
        (user) => user.id !== action.user.id
      );
      return {
        ...state,
        users: updatedUsers,
      };
    case UserActions.USER_ONKEYPRESS:
      return {
        ...state
      };
    case UserActions.UPDATE_USER:
      const updateUser: IUser = {
        id: action.user.id, // not really unique
        firstName: `updated${Math.random().toString()}`,
        lastName: action.user.lastName,
        email: action.user.email,
        isUserProfileUpdated: true,
      };

      const userToUpdate: IUser[] = state.users.filter(
        (user) => user.id !== action.user.id
      );

      return {
        ...state,
        users: userToUpdate.concat(updateUser).sort((a, b) => {
          return a.id - b.id;
        }),
      };
  }
  return state;
};

export default reducer;
