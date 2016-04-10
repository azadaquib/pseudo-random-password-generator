'use strict'

Math.seed = 0
Math.seededRandom = function (max, min) {
  max = max || 1
  min = min || 0
  Math.seed = (Math.seed * 9301 + 49297) % 233280
  var rnd = Math.seed / 233280
  return min + rnd * (max - min)
}

var examplePassword = 'jumhliknh'
var newPassword = ' '
var md5hash = md5('randomize')
document.write(md5hash.length + '<br/>')

var sum = 0
//  document.write('<br/>' + l + '<br/>')
var randArray = new Array(4)

//  document.write('<br/><br/>')

for (let i = 0; i < 4; i++) {
  randArray[i] = md5hash.substring((i * 8), ((i * 8) + 8))
  //  document.write((i * 8) + ' , ' + ((i * 8) + 8) + ' , ' + randArray[i] + '<br/>')
  randArray[i] = parseInt(randArray[i], 16)
  //  document.write(randArray[i] + '<br/>')
}

for (let i = 0; i < randArray.length; i++) {
  sum += randArray[i]
}

//  document.write('<br/>' + sum + '<br/>')

// var m = new MersenneTwister(sum)
// var randomNumber = m.random()

Math.seed = sum
var randomNumber = Math.seededRandom()
//  document.write('<br/>' + randomNumber + '<br/>')

/*
  Dynammically change password as typed
*/

var randSeed = Math.round(randomNumber * 1000000000)

//  document.write('<br/>' + randSeed + '<br/>')

var passwordArray = new Array(94)

for (let i = 0; i < 94; i++) {
  passwordArray[i] = 32 + i
}

for (let i = 0; i < examplePassword.length; i++) {
  let ln = (randSeed % 2) + 2
  let c = examplePassword.charCodeAt(i)
  randSeed += c
  Math.seed = randSeed
  for (let j = 0; j < ln; j++) {
    //  document.write('<br/>' + x + '<br/>')
    let z = Math.floor(Math.seededRandom() * 1000000000)
    z = z % 94
    newPassword += String.fromCharCode(passwordArray[z])
  }

}

//  newPassword = newPassword.substring(1)

document.write('<br/>' + newPassword + '<br/>')
