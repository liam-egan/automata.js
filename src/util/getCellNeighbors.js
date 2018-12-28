export default function getCellNeighbors({
  offsets,
  cells,
  row,
  column,
  keepUndefinedNeighbors = false,
}) {
  const neighbors = offsets.map(({ column: columnOffset, row: rowOffset }) => {
    let neighbor

    try {
      neighbor = cells[row + rowOffset][column + columnOffset]
    } catch (e) {}

    return neighbor
  })

  if (keepUndefinedNeighbors) {
    return neighbors
  }

  return neighbors.filter(elem => elem !== undefined)
}
