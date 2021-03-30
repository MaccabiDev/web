interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    isUserProfileUpdated: boolean,
}

type UserState = {
    users: IUser[]
}

type UserAction = {
    type: string,
    user: IUser
}

type DispatchType = (args: UserAction) => UserAction;