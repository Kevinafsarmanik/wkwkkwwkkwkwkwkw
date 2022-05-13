const { createHash } = require('crypto')
let handler = async (m, { conn, usedPrefix }) => {
    let sn = createHash('md5').update(m.sender).digest('hex')
    m.reply(usedPrefix + 'No Registrado ' + sn)
}
handler.help = ['sn']
handler.tags = ['xp']
handler.command = /^((cek)?sn(cek)?)$/i

handler.register = false

module.exports = handler
