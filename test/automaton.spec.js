import { expect } from 'chai'
import Automaton from '../src/automaton'

describe('Automaton', () => {
  it('returns an object', () => {
    const actual = Automaton({
      produceNextCellState: () => false,
    })

    expect(actual).to.be.an('object')
  })

  it('returns an object with all necessary fields', () => {
    const actual = Automaton({
      produceNextCellState: () => false,
    })

    expect(actual).to.have.property('next')
    expect(actual).to.have.property('cells')
  })

  it('returns an object with fields of the right type', () => {
    const actual = Automaton({
      produceNextCellState: () => false,
    })

    expect(actual.next).to.be.a('function')
    expect(Array.isArray(actual.cells)).to.eq(true)
  })

  it('throws a TypeError when not enough fields are present', () => {
    expect(Automaton).to.throw(TypeError)
  })

  it('creates cells with the passed in width and height', () => {
    const actual = Automaton({
      produceNextCellState: () => false,
      width: 10,
      height: 15,
    })

    expect(actual.cells.length).to.eq(15)
    expect(actual.cells[0].length).to.eq(10)
  })
})
