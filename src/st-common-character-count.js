/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

export default function getCommonCharacterCount(s1, s2) {
    const s1Char2Count = new Map()
    const s2Char2Count = new Map()
    const chars = new Set()
    for (const char of s1.split('')) {
        if (!s1Char2Count.has(char)) {
            s1Char2Count.set(char, 0)
        }
        s1Char2Count.set(char, s1Char2Count.get(char) + 1)
        chars.add(char)
    }
    for (const char of s2.split('')) {
        if (!s2Char2Count.has(char)) {
            s2Char2Count.set(char, 0)
        }
        s2Char2Count.set(char, s2Char2Count.get(char) + 1)
        chars.add(char)
    }
    let result = 0
    for (const char of chars) {
        if (s1Char2Count.has(char) && s2Char2Count.has(char)) {
            result += Math.min(s1Char2Count.get(char), s2Char2Count.get(char))
        }
    }
    return result
}
