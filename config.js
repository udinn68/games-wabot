global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Gs84sN5MU7lK0Dw4x8fOaQ','https://chat.whatsapp.com/H7XtHD1tMSX44e5zkA9dCT','https://chat.whatsapp.com/IoQmpKg1Enx9NcvPhhOsTE','https://chat.whatsapp.com/FWQc5u9woFTDhUfWvVq2cc','https://chat.whatsapp.com/LSbOJSj1G8aH067VlZlu9w']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6281252733108': { // put your number here
    name: 'Nafron Admin 𝐅𝐑𝐎𝐍 𝐁𝐎𝐓',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: false, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6281252733108': { // put your number here
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6281252733108': { // put your number here
    name: 'Nafron',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6281252733108': {
    isReport: true // if true this number will send if user use command /report or /join
  },
  '6281252733108': {} // ignore if you don't want anything, like name dll
}
global.mods = ['6281252733108'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '𝐒𝐲𝐚𝐢𝐟𝐮𝐝𝐝𝐢𝐧'
global.author = '𝐔𝐝𝐢𝐧 𝐁𝐎𝐓 𝐃𝐢𝐣𝐚𝐥𝐚𝐧𝐤𝐚𝐧 𝐎𝐥𝐞𝐡 𝐒𝐲𝐚𝐢𝐟𝐮𝐝𝐝𝐢𝐧'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
