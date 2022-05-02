type UsersType = {
    [key: string]: { id: number; name: string }
}

let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '332323': {id: 332323, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '332323': {id: 332323, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})

test('should select corresponding users from objects', () => {
    users['1'].name = 'Ekaterina';
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'});
})

test('should delete corresponding users from objects', () => {
    delete users['1'];
    expect(users['1']).toBeUndefined();
})