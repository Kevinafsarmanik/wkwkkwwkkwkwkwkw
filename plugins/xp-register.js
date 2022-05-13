const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Ya estás registrado\n¿Quieres volver a registrarte? ${usedPrefix}unreg <SERIAL>`
  if (!Reg.test(text)) throw `Ejemplo:\n*${usedPrefix + command} Juan.16*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío'
  if (!age) throw 'La edad no puede estar vacía (Número)'
  age = parseInt(age)
  if (age > 50) throw 'Edad demasiado mayor'
  if (age < 5) throw 'Edad demasiado menor'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let prefix = usedPrefix
  let sn = createHash('md5').update(m.sender).digest('hex')
  conn.sendButton(m.chat, `
┌─「 *Registro* 」
├ nombre: ${name}
├ edad: ${age}
└────  

*SN* (Número de serie) se envía en un chat privado y se utiliza para volver a registrarse. Si olvida el *SN*, escriba *${usedPrefix}sn* para comprobar su *SN*! 
`.trim(), wm, `Perfil`,`${prefix}pp`, m) 
conn.sendMessage(m.sender, {text: `*SN:* ${sn}`}, m)
}
handler.help = ['daftar', 'register'].map(v => v + ' <nombre>.<edad>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler