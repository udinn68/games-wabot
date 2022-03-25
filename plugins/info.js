let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('Tunggu Sebentar Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
┏━━━━━『𝐔𝐃𝐈𝐍 𝐁𝐎𝐓』━━━━━
┃ *Versi:* 2
┃
┣『BELI PREMIUM 𝐔𝐃𝐈𝐍 𝐁𝐎𝐓 』
┃> Keuntungan Akses Fitur Yang di 
┃Kunci ✅
┃➜ GOPAY: 088805868341
┃➜ DANA : 088805868341
┃➜ SMARTFREN : 088805868341
┃*TERTARIK?* Chat Owner Sekarang
┃Juga dengan Ketik *.Owner*
┣❀ SYARAT & KETENTUAN 
┃『𝐔𝐃𝐈𝐍 𝐁𝐎𝐓』
┃
┃➜ *KAMI TIDAK BERTANGGUNG*
┃   *JAWAB ATAS PENYALAH*
┃   *GUNAAN BOT*
┃➜ *KAMI TIDAK BERTANGGUNG*
┃   *JAWAB ATAS KEBOCORAN DATA*
┃   *PRIBADI ANDA*
┃➜ *KAMI AKAN MENYIMPAN DATA*
┃   *SEPERTI NOMER TELEPON*
┃   *ANDA DI DATABASE KAMI*
┃ 
┃ 
┣❀©2022 𝗦𝘆𝗮𝗶𝗳𝘂𝗱𝗱𝗶𝗻
┣ Follow Tiktok @nafronanjayy
┗━━━━━『𝐔𝐃𝐈𝐍 𝐁𝐎𝐓』 ┅
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
