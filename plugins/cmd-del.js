let handler = async (m, { conn, usedPrefix, text, command }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `sin hash`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'No tienes permiso para eliminar este comando'
    delete sticker[hash]
    m.reply(`Listo!`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <texto>')
handler.tags = ['database', 'premiun']
handler.command = ['delcmd']
handler.premium = true
module.exports = handler