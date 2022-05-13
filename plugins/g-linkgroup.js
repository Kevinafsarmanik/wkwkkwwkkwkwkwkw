let handler = async (m, { conn }) => {
  try {
    conn.reply(m.chat, `*Link :* ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat) + `\n\n${conn.user.name}`, m)
  } catch {
    conn.reply(m.chat, `Hazlo @${conn.user.jid.split('@')[0]} como administrador para usar este comando!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['linkgroup']
handler.tags = ['grupos']
handler.command = /^link(g(c)?ro?up)?$/i

handler.group = true
//handler.botAdmin = true

module.exports = handler
