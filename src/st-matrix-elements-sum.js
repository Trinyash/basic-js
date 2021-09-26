/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

export default function getMatrixElementsSum(matrix) {
    const transpose = (m) => m[0].map((col, i) => m.map((row) => row[i]))

    let result = 0
    matrix = transpose(matrix)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                break
            }
            result += matrix[i][j]
        }
    }
    return result
}
