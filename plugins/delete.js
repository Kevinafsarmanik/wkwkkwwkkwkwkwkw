let handler = function (m) {
  if (!m.quoted) throw false
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) throw 'Para eso debes etiquetar un mensaje enviado por mi :)'
 conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
handler.help = ['delete']
handler.tags = ['info']
handler.command = /^(del|delete|unsend?)$/i
handler.limit = false

module.exports = handler
