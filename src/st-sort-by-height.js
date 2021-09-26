/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

export default function sortByHeight(arr) {
    let realHeights = arr.filter((el) => el !== -1).sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
            arr[i] = realHeights[0]
            realHeights = realHeights.slice(1)
        }
    }
    return arr
}
