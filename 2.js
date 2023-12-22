const fs = require('fs')

const stageOneInput = fs.readFileSync('input/2', 'utf-8').split('\n')


// STAGE 1

const MAX_CUBES = {
  red: 12,
  green: 13,
  blue: 14
}

const stageOne = input =>
  input.reduce((total, line) => {
    const gameIndex = parseInt(line.match(/^(Game )(\d+)/)[2])
    const impossible = line.match(/\d+ \w+/g).filter(reveal => {
      const [ amount, colour ] = reveal.split(' ')
      return MAX_CUBES[colour] < amount
    }).length
    return impossible ? total : total + gameIndex
  }, 0)

console.log('Stage one: ' + stageOne(stageOneInput))


// STAGE 2

const stageTwo = input =>
  input.reduce((total, line) => {
    const min_cubes = {}
    line.match(/\d+ \w+/g).forEach(reveal => {
      const [ amount, colour ] = reveal.split(' ')
      if (!min_cubes[colour] || min_cubes[colour] < parseInt(amount))
        min_cubes[colour] = parseInt(amount)
    })
    const power = Object.values(min_cubes).reduce((total, val) => total * val)
    return total + power 
  }, 0)

console.log('Stage two: ' + stageTwo(stageOneInput))