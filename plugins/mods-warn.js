let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
        let warning = global.db.data.users[ban].warning
        if (warning < 3) {
            global.db.data.users[ban].warning += 1
            m.reply(`*Advertencia exitosa`)
            conn.sendButton(ban, '*Un moderador le advirtió y ahora tiene ' + (warning + 1) + '.Recuerda que si te avisan 4 veces serás baneado automáticamente*', wm, 'Owner', usedPrefix + 'owner', null)
        } else if (warning == 3) {
            global.db.data.users[ban].banned = true
            global.db.data.users[ban].warning = 0
            m.reply('*Ha sido baneado, porque tiene 4 advertencias*')
            conn.sendButton(ban, '*Estás baneado por recibir 4 advertencias*', wm, 'Owner', usedPrefix + 'owner', null)
        }
    } else conn.reply(m.chat, '*A quién desea advertir?*', m)
}
handler.help = ['warn @tag']
handler.tags = ['owner', 'moderator']
handler.command = /^warn$/i
handler.mods = true

module.exports = handler
