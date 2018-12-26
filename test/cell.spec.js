import { expect } from 'chai'
import Cell from '../src/cell.js'

describe('Cell', () => {
  it('returns an enabled Cell when passed a boolean', () => {
    const actual = new Cell(true)
    expect(actual.enabled).to.eq(true)
  })

  it('returns an enabled Cell when passed an options object', () => {
    const actual = new Cell({
      enabled: true,
    })
    expect(actual.enabled).to.eq(true)
  })
})
