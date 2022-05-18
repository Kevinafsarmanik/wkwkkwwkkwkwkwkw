let handler = async (m, { conn, text }) => {
  if (!text) throw false
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['IYa....pi boong', 'Mungkin iya', 'Bisa jadi', 'Bentar gw lagi berak', 'Tidak', 'Tidak mungkin', 'yakin dek?', 'Yntkts', 'Malah nanya saya', 'Ntah', 'yoi jelas', 'y', 'Nanya Mulu kek wartawan', 'Ntah lah pokoknya owner gw Gamteng', 'Gak ada pertanyaan lain apa?', 'wkwkw pertanyaan lu lucu', 'Nanya Mulu Turu dek'])}
  `.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['apakah <text>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
