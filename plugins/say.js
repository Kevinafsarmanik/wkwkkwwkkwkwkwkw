let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm. ¿dónde está el texto?\n\nejemplo:\n${usedPrefix + command} hola mundo`
    conn.reply(m.chat, text, null)
}
handler.help = ['say <texto>']
handler.tags = ['herramientas']
handler.command = /^(say)$/i

module.exports = handler
