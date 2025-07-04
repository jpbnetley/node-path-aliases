import { logIt } from './log-it.js'

describe('logIt', () => {
  it('should log the correct message to the console', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    logIt('test-message')
    expect(consoleSpy).toHaveBeenCalledWith('log it: test-message')
    consoleSpy.mockRestore()
  })

  it('should handle empty string', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    logIt('')
    expect(consoleSpy).toHaveBeenCalledWith('log it: ')
    consoleSpy.mockRestore()
  })
})
