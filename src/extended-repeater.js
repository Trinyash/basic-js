/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

export default function repeater(str, options) {
    const defaultSeparator = '+'
    const defaultAdditionSeparator = '|'

    str = `${str}`
    options = options !== undefined ? options : {};
    options.repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes
    options.separator = options.separator === undefined ? defaultSeparator : options.separator
    options.addition = options.addition === undefined ? '' : `${options.addition}`
    options.additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes
    options.additionSeparator = options.additionSeparator === undefined ? defaultAdditionSeparator : options.additionSeparator

    const result = []
    for (let i = 0; i < options.repeatTimes; i++) {
        result.push(str)
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            result.push(options.addition)
            if (j < options.additionRepeatTimes - 1) {
                result.push(options.additionSeparator)
            }
        }
        if (i < options.repeatTimes - 1) {
            result.push(options.separator)
        }
    }
    return result.join('')
}
