

let UsersCollection: Array<any> = [
    {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        email: "agent@smith.com",
    },
    {
        id: 2,
        firstName: "Ben",
        lastName: "Jonson",
        email: "ben@smith.com",
    },
    {
        id: 3,
        firstName: "Guy",
        lastName: "Sharabani",
        email: "guy@smith.com",
    },
];

export function addUser(user: any) {
    let newUser = {
        id: UsersCollection.length + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    };
    UsersCollection.push(newUser);
}

export default UsersCollection;