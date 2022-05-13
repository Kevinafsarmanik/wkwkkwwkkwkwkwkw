const xpperlimit = 350
let handler = async (m, { conn, usedPrefix, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (isNaN(count)) throw `¡solo números!\n\nejemplo: .buy5`
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.sendButton(m.chat, `Compras un límite al precio\n*${xpperlimit * count} XP* y obten *${count} Limit.*`, wm, `Limit`,`${usedPrefix}limit`, m)
  } else conn.sendButton(m.chat, `XP no es suficiente para comprar *${count} Limit.*`, wm, `Claim`, `${usedPrefix}claim`, m)
}
handler.help = ['buy <numero>', 'buyall']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)|buy|buyall$/i

module.exports = handler
