'use strict'

/*
  Simple fuction to generate pseudo random values
  Math.seed stores the seed values
*/

Math.seed = 0
Math.seededRandom = function (max, min) {
  max = max || 1
  min = min || 0
  Math.seed = (Math.seed * 9301 + 49297) % 233280
  var rnd = Math.seed / 233280
  return min + rnd * (max - min)
}

function generatePassword(passphrase, password) {

  var examplePassword = password
  var newPassword = ' '                                 // Generated password stored here
  var passphrase = passphrase
  var md5hash = md5(passphrase)

  var sum = 0
  var randArray = new Array(4)

  for (let i = 0; i < 4; i++) {
    randArray[i] = md5hash.substring((i * 8), ((i * 8) + 8))
    randArray[i] = parseInt(randArray[i], 16)
  }

  for (let i = 0; i < randArray.length; i++) {
    sum += randArray[i]
  }

  Math.seed = sum
  var randomNumber = Math.seededRandom()

  var randSeed = Math.round(randomNumber * 1000000000)

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
      let z = Math.floor(Math.seededRandom() * 1000000000)
      z = z % 94
      newPassword += String.fromCharCode(passwordArray[z])
    }
  }

  return newPassword
}
