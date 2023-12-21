const fs = require('fs')
const stageOneInput = fs.readFileSync('1', 'utf-8').split('\n')


// STAGE 1

const stageOne = input =>
  input.map(line => line
    .split('').filter(Number))
  .reduce((total, line) => 
    total + Number(line[0] + line.pop()), 0)

console.log('Stage one: ' + stageOne(stageOneInput))


// STAGE 2

const NUMS = ['ne','wo','hree','our','ive','ix','even','ight','ine']
const cast = num => Number(num) || NUMS.indexOf(num) + 1

const stageTwo = input =>
  input.reduce((total, line) => {
    const nums = line.match(/\d|ne|wo|hree|our|ive|ix|even|ight|ine/g)
    return total += Number(`${cast(nums[0])}${cast(nums.pop())}`)
  }, 0)

console.log('Stage two: ' + stageTwo(stageOneInput))