const fs = require('fs')

const stageOneInput = fs.readFileSync('1', 'utf-8').split('\n')

const stageOne = input =>
  input.map(line => line
    .split('')
    .filter(Number))
  .reduce((total, line) => 
    total + Number(line[0] + line.pop()), 0)

console.log('Stage one: ' + stageOne(stageOneInput))

const stageTwo = input =>
  input.map(line => line
    .replace(/one/g, 'on1e')
    .replace(/two/g, 'tw2o')
    .replace(/three/g, 'thre3e')
    .replace(/four/g, 'fou4r')
    .replace(/five/g, 'fiv5e')
    .replace(/six/g, 'si6x')
    .replace(/seven/g, 'seve7n')
    .replace(/eight/g, 'eigh8t')
    .replace(/nine/g, 'nin9e'))
  .map(line => line
    .split('')
    .filter(Number))
  .reduce((total, line) => 
    total + Number(line[0] + line.pop()), 0)

console.log('Stage two: ' + stageTwo(stageOneInput))
