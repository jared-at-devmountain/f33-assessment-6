const {shuffleArray} = require('./utils')

let testArr1 = ['eenee', 'meenee', 'miney', 'moe']
let testArr2 = []
let testArr3 = [1,2,3,3,4,5,6]

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
    })

    test('return an array of the same length as the input', () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr2)).toHaveLength(testArr2.length)
        expect(shuffleArray(testArr3)).toHaveLength(testArr3.length)
    })
})
