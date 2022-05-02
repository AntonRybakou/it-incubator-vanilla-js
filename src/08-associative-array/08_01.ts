export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya'];

export const usersObject = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType = {
    [key: string]: { id: number; name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '332323': {id: 332323, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}