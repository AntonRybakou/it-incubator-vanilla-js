import exp from "constants";

function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address?: { title: string }
}


test('reference type test', () => {
    let user: UserType = {
        name: "Anton",
        age: 32
    }

    increaseAge(user);

    expect(user.age).toBe(33);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);

})

test('array reference test', () => {
    let users: Array<UserType> = [
        {
            name: "Anton",
            age: 32
        },
        {
            name: "Olga",
            age: 31
        }
    ]

    let admins = users;

    admins.push({name: 'Bandygan', age: 18});

    expect(users[2]).toEqual({name: 'Bandygan', age: 18});
})

test('value reference test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = 101;

    expect(adminsCount).toEqual(101);
})

test('reference type test2', () => {
    const address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Anton",
        age: 32,
        address: address
    }

    // let addr = user.address

    let user2: UserType = {
        name: 'Olga',
        age: 31,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address).toBe(user2.address);
    expect(user.address.title).toBe('Minsk City');

})

test('reference type array test', () => {
    const address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Anton",
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let user2: UserType = {
        name: 'Olga',
        age: 31,
        address: user.address
    }

    const users = [user, user2, {name: 'Volodya', age: 2, address: address}];

    const admins = [user, user2];

    admins[0].name = 'Tosha'

    expect(users[0].name).toBe('Tosha');
    expect(user.name).toBe('Tosha');

})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e'];

    letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z']);
})