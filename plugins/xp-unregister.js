const { createHash } = require('crypto')
let handler = async function (m, { args, usedPrefix }) {
  if (!args[0]) throw `El número de serie está vacío\nEscriba*${usedPrefix}serial* para obtener su código SN`
  let user = db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Número de serie incorrecto'
  user.registered = false
  m.reply(`Desregistro completo!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL>')
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = false

module.exports = handler

