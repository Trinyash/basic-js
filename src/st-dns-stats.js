/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

export default function getDNSStats(domains) {
    const result = {}
    for (const domain of domains) {
        let shreddedDomain = ''
        for (const domainElement of domain.split('.').reverse()) {
            shreddedDomain = `${shreddedDomain}.${domainElement}`
            if (!result[shreddedDomain]) {
                result[shreddedDomain] = 0
            }
            result[shreddedDomain] += 1
        }
    }
    return result
}
