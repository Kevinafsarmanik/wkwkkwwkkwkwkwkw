let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donación 」
│ • Sementara Free
│ • Sementara free
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
