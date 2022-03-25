let handler = function (m) {
  this.sendContact(m.chat, '6288805868341', '𝗨𝗗𝗜𝗡 𝗚𝗔𝗡𝗦', '681252733108' , 'Nafron Penjual BOT' m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
