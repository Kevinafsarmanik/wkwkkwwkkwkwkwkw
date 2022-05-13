let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false 
      if (!isBotAdmin) m.reply(` *「 ANTILINK 」* ${isAdmin ? "El administrador es gratis hermano :'v" : `\n\nEnlace detectado, No soy administrador, así que no puedo eliminarlo!`}`)
    if (isBotAdmin) {
      m.reply(` *「 ANTILINK 」* \n\nLink detectado, adiós, serás expulsado!!`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler
