/* 
    Made by https://github.com/syahrularranger 
    Jangan di hapus credit nya :)
*/
let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Completa el juego primero'
  if (!m.mentionedJid[0]) return m.reply(`_¿Con quien quieres jugar?_\Etiqueta a la persona.. Ejemplo\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `La persona a la que estás desafiando está jugando con alguien más. :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
_*PvP*_

@${m.sender.split`@`[0]} desafiante @${m.mentionedJid[0].split`@`[0]} jugar PvP

Por favor @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = `Escribir "aceptar/ok" para empezar el juego\nEscriba "rechazar/no" para rechazar`
  conn.suit[id] = {
    chat: await conn.send2Button(m.chat, caption, footer, 'Aceptar', 'ok', 'Rechazar', 'No', m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `_Tiempo de espera_`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, poin_bot, timeout
  }
}
handler.tags = ['games']
handler.help = ['suitpvp', 'suit'].map(v => v + ' @tag')
handler.command = /^suit(pvp)?$/i

handler.group = true
handler.game = true

module.exports = handler