interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

type UserState = {
    users: IUser[]
}

type UserAction = {
    type: string,
    user: IUser
}

type DispatchType = (args: UserAction) => UserAction;