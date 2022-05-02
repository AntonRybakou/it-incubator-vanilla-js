type LessonsType = {
    lessons: Array<{title: string}>,
}

export type ManType = {
    name: string,
    age: number,
    lessons: LessonsType,
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;

beforeEach(() => {
    props = {
        name: "Anton",
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Prytickaha street',
            }
        }
    }
})

test('checking destructuring assignments', () => {
    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(title).toBe('Prytickaha street')
})
