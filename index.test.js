const { isEleven } = require('./index');

test('number 11 to be equal 11', () => {
    expect(isEleven(11)).toBe(true);
});

test('number 12 to be not equal 11', () => {
    expect(isEleven(12)).toBe(false);
});

test('string "11" to be equal 11', () => {
    expect(isEleven('11')).toBe(true);
});

test('string "12" to be not equal 11', () => {
    expect(isEleven('12')).toBe(false);
});

test('string "oof" to be not equal 11', () => {
    expect(isEleven('oof')).toBe(false);
});
