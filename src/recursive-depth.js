/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

export default class DepthCalculator {
    calculateDepth(arr) {
        return 1 + arr.filter(Array.isArray).reduce((prev, curr) => Math.max(prev, this.calculateDepth(curr)), 0)
    }
}
