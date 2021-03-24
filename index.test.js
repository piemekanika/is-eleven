const { isEleven } = require('./index');

const tests = [
    {
        expected: true,
        comment: 'Expected ${value} ${type} to be equal ${expected}',
        values: [
            11,
            0b1011,
            '11',
            ' 11',
        ],
    },
    {
        expected: false,
        comment: 'Expected ${value} ${type} to be equal ${expected}',
        values: [
            12,
            [11],
            '12',
            'foo11',
            'foobar',
            '11bar',
            0x11,
            0b11,
        ],
    },
];

tests.forEach(testCollection => {
    testCollection.values.forEach(value => {
        const comment = testCollection.comment
            .replace('${value}', value)
            .replace('${type}', typeof value)
            .replace('${expected}', testCollection.expected);

        test(comment, () => {
            expect(isEleven(value)).toBe(testCollection.expected);
        });
    });
});
