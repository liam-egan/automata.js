import { expect } from 'chai'
import Cell from '../src/cell.js'

describe('Cell', () => {
  it('should return an object', () => {
    const actual = Cell()
    expect(actual).to.be.an('object')
  })

  it('should return an object with an "enabled" field', () => {
    const actual = Cell()
    expect(actual).to.have.property('enabled')
  })

  it('should return an enabled Cell when passed a boolean', () => {
    const actual = Cell(true)
    expect(actual.enabled).to.eq(true)
  })

  it('should return an enabled Cell when passed an options object', () => {
    const actual = Cell({
      enabled: true,
    })
    expect(actual.enabled).to.eq(true)
  })
})
