/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

export default function minesweeper(matrix) {
    const isInBounds = (index, length) => 0 <= index && index < length

    let result = [...Array(matrix.length)].map(e => Array(matrix[0].length).fill(0))

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                for (const [x, y] of [  [i-1, j-1], [i-1, j], [i-1, j+1],
                                        [  i, j-1]          , [i  , j+1],
                                        [i+1, j-1], [i+1, j], [j+1, j+1]  ]) {
                    if (isInBounds(x, matrix.length) && isInBounds(y, matrix[i].length)) {
                        result[x][y] += 1;
                    }
                }
            }
        }
    }
    return result;
}
