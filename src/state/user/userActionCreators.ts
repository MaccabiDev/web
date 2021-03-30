import * as userActions from "./userActionsTypes";

export function addUser(user: IUser) {
    const action: UserAction = {
        type: userActions.ADD_USER,
        user,
    }

    return simulateHttpRequest(action)
}

export function removeUser(user: IUser) {
    const action: UserAction = {
        type: userActions.REMOVE_USER,
        user,
    }

    return simulateHttpRequest(action)
}

export function updateUser(user: IUser) {
    const action: UserAction = {
        type: userActions.UPDATE_USER,
        user,
    }

    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: UserAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 200)
    }
}