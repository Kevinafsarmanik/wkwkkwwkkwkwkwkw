let handler = async (m, { conn, isOwner, text, isAdmin }) => {
  let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    }
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    else who = m.chat
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
    }
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  }

  try {
    if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = true
    else global.db.data.users[who].banned = true
    m.reply(`¡Baneado exitosamente! ${await conn.user.name} no activo en el chat ${await conn.getName(who) == undefined ? 'este' : await conn.getName(who)}.`)
  } catch (e) {
    throw `numero no existe en mi didatabase!`
  }
}
handler.help = ['ban']
handler.tags = ['owner', 'group']
handler.command = /^ban(chat)?$/i

module.exports = handler
