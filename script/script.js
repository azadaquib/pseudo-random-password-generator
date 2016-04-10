
'use strict'

var md5hash = '5d41402abc4b2a76b9719d911017c592'
var l = md5hash.length
var sum = 0
document.write('<br/>' + l + '<br/>')
var randArray = new Array(4)

document.write('<br/><br/>')

for (let i = 0; i < 4; i++) {
  randArray[i] = md5hash.substring((i * 8), ((i * 8) + 8))
  document.write((i * 8) + ' , ' + ((i * 8) + 8) + ' , ' + randArray[i] + '<br/>')
  randArray[i] = parseInt(randArray[i], 16)
  document.write(randArray[i] + '<br/>')
}

for (let i = 0; i < randArray.length; i++) {
  sum += randArray[i]
}

document.write('<br/>' + sum + '<br/>')

var m = new MersenneTwister(sum)
var randomNumber = m.random()

document.write('<br/>' + randomNumber + '<br/>')

/*
  Dynammically change password as typed
*/

var randSeed = Math.round(randomNumber * 1000000000)

document.write('<br/>' + randSeed + '<br/>')

var passwordArray = new Array()

for (let i = 0; i < 94; i++) {
  passwordArray.append(32 + i)
}
