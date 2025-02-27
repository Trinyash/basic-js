/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

export default function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }

    return members
        .filter((x) => typeof x === 'string')
        .map((x) => x.trim())
        .sort((a, b) => a.localeCompare(b))
        .reduce((acc, cur) => `${acc}${cur[0].toUpperCase()}`, '')
}
