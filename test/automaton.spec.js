import { expect } from 'chai'
import Automaton from '../src/automaton'
import Cell from '../src/cell'

describe('Automaton', () => {
  it('throws a TypeError when produceCellState is not present', () => {
    expect(() => new Automaton()).to.throw(TypeError)
  })

  it('throws a TypeError when produceCellState is not a function', () => {
    expect(() => {
      new Automaton({
        produceNextCellState: false,
      }).to.throw(TypeError)
    })
  })

  it('throws a RangeError when width is 0', () => {
    expect(() => {
      new Automaton({
        produceNextCellState: () => new Cell(false),
        width: 0,
      })
    }).to.throw(RangeError)
  })

  it('throws a RangeError when height is 0', () => {
    expect(() => {
      new Automaton({
        produceNextCellState: () => new Cell(false),
        height: 0,
      })
    }).to.throw(RangeError)
  })

  it('throws a RangeError both width and height are 0', () => {
    expect(() => {
      new Automaton({
        produceNextCellState: () => new Cell(false),
        height: 0,
        width: 0,
      })
    }).to.throw(RangeError)
  })

  it('throws a TypeError when a member of cells is not a Cell', () => {
    expect(() => {
      new Automaton({
        produceNextCellState: () => new Cell(false),
        cells: [1],
      })
    })
  })

  it('creates cells with the passed in width and height', () => {
    const actual = new Automaton({
      produceNextCellState: () => new Cell(false),
      width: 10,
      height: 15,
    })

    expect(actual.cells.length).to.eq(15)
    expect(actual.cells[0].length).to.eq(10)
  })

  describe('getNextState method', () => {
    it('should return an Automaton', () => {
      const automaton = new Automaton({
        produceNextCellState: () => new Cell(false),
      })
      const actual = automaton.getNextState()

      expect(actual).to.be.an.instanceof(Automaton)
    })
  })
})
