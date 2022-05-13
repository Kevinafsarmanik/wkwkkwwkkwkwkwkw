let yts = require('yt-search')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Donde esta el texto?', m)
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*Título:* ${v.title} 
*Link:* (${v.url})
*Duración:* ${v.timestamp}
*Publicado:* ${v.ago}
*Vistas:* ${v.views} 
 `.trim()
      case 'channel': return `
*Canal:* ${v.name} 
*Link:* (${v.url})
*Subscriptores:* ${v.subCountLabel} (${v.subCount})
*Videos:* ${v.videoCount}
`.trim()
    }
  }).filter(v => v).join('\n\n*=========================*\n\n')
 conn.reply(m.chat, '*───「 Youtube 」───*\n\n' + teks, m)
}
handler.help = ['ytsearch <texto>']
handler.tags = ['herramientas', 'internet']
handler.command = /^yts(earch)?$/i

module.exports = handler
