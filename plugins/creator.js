let handler = function (m) {
  this.sendContact(m.chat, '6288805868341', '𝗨𝗗𝗜𝗡 𝗚𝗔𝗡𝗦', '681252733108' , 'Nafron Penjual BOT' m)
  let contacts = []
  for (let owner of Object.entries(global.Owner).filter(v => v[1].isCreator)) {
    contacts.push(...[owner[0], (owner[1].name || conn.getName(owner[0]) || '')])
  }
  if (contacts.length < 3) return this.sendContact(m.chat, contacts[0], contacts[1], m)
  this.sendContactArray(m.chat, contacts, m)
m.reply(`Nomer owner itu *bukan bot*, tapi nomor _*pemilik bot*_\n\nSilahan chat jika ada keperluan.\nChat "P" atau minta save kemungkinan tidak akan di balas
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
