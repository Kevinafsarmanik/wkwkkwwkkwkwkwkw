let handler = async (m, { conn, text, usedPrefix, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) throw 'Etiqueta con el comando *${usedPrefix + command}*'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash no encontrado'
    if (!text) throw `Usar:\n${usedPrefix + command} <texto>\n\nEjemplo:\n${usedPrefix + command} prueba`
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw 'No tienes permiso para modificar'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Listo!`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <texto>')
handler.tags = ['database', 'premiun']
handler.command = ['setcmd']
handler.premium = true
handler.fail = null

module.exports = handler