let handler = async (m, { conn, isROwner, text }) => {
  let { spawn } = require('child_process');
  if (!process.send) throw 'No: node main.js\nSi: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Reiniciando el Bot... Por favor espere alrededor de 1 minuto')
    process.send('reset')
  } else throw '_error.._'
}

handler.help = ['restart']
handler.tags = ['host']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

module.exports = handler
