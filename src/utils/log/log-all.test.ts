import { logAll } from './log-all.js'
import { PREFIX } from '#constants/prefix.js'
import * as logItModule from './log-it.js'
import * as logMeModule from './log-me.js'

describe('logAll', () => {
  const name = 'testName'
  const expectedValue = `${PREFIX} ${name} ${PREFIX}`

  let logItSpy: ReturnType<typeof vi.spyOn>
  let logMeSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    logItSpy = vi.spyOn(logItModule, 'logIt').mockImplementation(() => {})
    logMeSpy = vi.spyOn(logMeModule, 'logMe').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should call logIt with the correct value', () => {
    logAll(name)
    expect(logItSpy).toHaveBeenCalledWith(expectedValue)
  })

  it('should call logMe with the correct value', () => {
    logAll(name)
    expect(logMeSpy).toHaveBeenCalledWith(expectedValue)
  })

  it('should call both logIt and logMe once each', () => {
    logAll(name)
    expect(logItSpy).toHaveBeenCalledTimes(1)
    expect(logMeSpy).toHaveBeenCalledTimes(1)
  })
})
