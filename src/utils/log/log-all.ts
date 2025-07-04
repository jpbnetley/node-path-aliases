import { PREFIX } from '#constants/prefix.js'
import { logIt } from './log-it.js'
import { logMe } from './log-me.js'

/**
 * Logs the provided name using two different logging functions.
 *
 * This function logs the name with a prefix using `logIt`, and then logs the name again using `logMe`.
 *
 * @param name - The name or message to be logged.
 */
export function logAll(name: string) {
  const value = `${PREFIX} ${name} ${PREFIX}`
  logIt(value)
  logMe(value)
}
