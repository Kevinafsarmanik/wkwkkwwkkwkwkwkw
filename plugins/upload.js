const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Etiqueta la foto/video que deseas obtener URL *${usedPrefix}${command}*`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${conn.user.name}
  
${link}

${media.length} Byte(s)
${isTele ? '(Sin fecha de vencimiento)' : '(No conocida)'}`)
}
handler.help = ['tourl <media>']
handler.tags = ['herramientas']
handler.command = /^(upload|to(url|link))$/i

module.exports = handler
