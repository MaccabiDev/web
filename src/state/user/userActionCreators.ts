import * as userActions from "./userActionsTypes";

export function addUser(user: IUser) {
    const action: UserAction = {
        type: userActions.ADD_USER,
        user,
    }

    return simulateHttpRequest(action, 100)
}

export function removeUser(user: IUser) {
    const action: UserAction = {
        type: userActions.REMOVE_USER,
        user,
    }

    return simulateHttpRequest(action, 50)
}

export function updateUser(user: IUser) {
    const action: UserAction = {
        type: userActions.UPDATE_USER,
        user,
    }

    return simulateHttpRequest(action, 10)
}

export function simulateHttpRequest(action: UserAction, timerMilliseconds: number) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, timerMilliseconds)
    }
}