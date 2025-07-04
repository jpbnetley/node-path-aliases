import { logMe } from './log-me.js'

describe('logMe', () => {
  it('should log the correct message with the provided name', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    logMe('testName')
    expect(consoleSpy).toHaveBeenCalledWith('logging me: testName')
    consoleSpy.mockRestore()
  })

  it('should log the correct message with an empty string', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    logMe('')
    expect(consoleSpy).toHaveBeenCalledWith('logging me: ')
    consoleSpy.mockRestore()
  })
})
