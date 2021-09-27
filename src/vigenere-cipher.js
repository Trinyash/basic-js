/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

export default class VigenereCipheringMachine {
    alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ]

    constructor(mode = true) {
        this.mode = mode
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!')
        }
        key = key.toUpperCase()
        let i = 0
        return message
            .toUpperCase()
            .split('')
            .map((v, i, a) => this.mode ? v : a[a.length - 1 - i])
            .map((char) => {
                if (this.alphabet.includes(char)) {
                    const index = (this.alphabet.indexOf(char) + this.alphabet.indexOf(key[i])) % this.alphabet.length
                    i = ++i % key.length
                    return this.alphabet[index]
                }
                return char
            })
            .join('')
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!')
        }
        key = key.toUpperCase()
        let i = 0
        return message
            .toUpperCase()
            .split('')
            .map((v, i, a) => this.mode ? v : a[a.length - 1 - i])
            .map((char) => {
                if (this.alphabet.includes(char)) {
                    const index = ((this.alphabet.indexOf(char) - this.alphabet.indexOf(key[i])) + this.alphabet.length) % this.alphabet.length
                    i = ++i % key.length
                    return this.alphabet[index]
                }
                return char
            })
            .join('')
    }
}
