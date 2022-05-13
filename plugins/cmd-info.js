module.exports = Object.assign(async function handler(m, { conn, text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw 'Hash not found'
    let sticker = global.db.data.sticker[hash]
    if (sticker) return m.reply(`
*fileSha256:* ${hash}
*Texto:* ${sticker.text}
*Creado:* ${sticker.at}
*Bloqueado:* ${sticker.locked ? 'Yes' : 'No'}
*Creador:* ${conn.getName(sticker.creator)}
*Creador:* ${splitM(sticker.creator)}
*Creador Jid:* ${sticker.creator}
${sticker.mentionedJid.length > 0 ? `*Cmd Mencion:*
${sticker.mentionedJid.map((v, i) => `No. *${i + 1}*:\n*Nombre* ${conn.getName(v)}\n*Número:* ${splitM(v)}\n*Jid:* ${v}`).join('\n\n')}` : ''} 
`.trim())
    else m.reply('El sticker no está en la base de datos')
}, {
    help: ['cmd'].map(v => 'info' + v + ' <texto>'),
    tags: ['database'],
    command: ['infocmd']
})

/**
* split Jid
* @param {String} jid 
* @returns String
*/
function splitM(jid) {
    return jid.split('@')[0]
}
