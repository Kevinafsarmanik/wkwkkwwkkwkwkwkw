let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, usedPrefix, text, isPrems, isOwner }) => {
  if (!text) throw `uhm.. ¿qué estás buscando?\n\nEjemplo:\n${usedPrefix + command} Entre Nosotros Remix`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Vídeo/Audio no encontrado'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nprueba con otro servidor...'}`)
    }
  }
  if (yt === false) throw 'todos los servidores fallan'
  if (yt2 === false) throw 'todos los servidores fallan'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*Título:* ${title}
*Tamaño del archivo de audio:* ${filesizeF}
*Tamaño del archivo de vídeo:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
 `.trim(), wm, `🎵 AUDIO ${filesizeF}`, usedPrefix + `yta ${vid.url}`, `📽 VIDEO ${yt2.filesizeF}`, usedPrefix + `yt ${vid.url}`, m)
}
handler.help = ['play'].map(v => v + ' <búsqueda>')
handler.tags = ['descargador']
handler.command = /^(dj|musik|song|lagu|p(lay)?)$/i

handler.exp = 3
handler.limit = false
handler.register = false

module.exports = handler

