let handler = async (m, { conn }) => {
  let lang = db.data.users[m.sender].lang
  let tot = Object.values(global.plugins).filter(p => !p.disabled).map(p => Array.isArray(p.command) ? p.command : [p.command]).length
  let total = await conn.translate(lang, 'Total ' + tot).catch((_) => 'Total ' + tot)
  m.reply(total)
}
handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = /^(total)?fitur$/i

module.exports = handler
