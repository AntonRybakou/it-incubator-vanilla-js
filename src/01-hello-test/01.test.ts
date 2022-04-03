import {multiply, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('Sum should be correct', () => {
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    expect(result1).toBe(3);
    expect(result2).toBe(5);
});

test('Multiply should be correct', () => {
    const result1 = multiply(a, b);
    const result2 = multiply(b, c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('splitIntoWords should be correct', () => {
    const a = 'Hello my friend';
    const b = 'JS - the best programing language';

    const result1 = splitIntoWords(a, b);
    const result2 = splitIntoWords(b, a);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('Hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('JS');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programing');
    expect(result2[4]).toBe('language');
})