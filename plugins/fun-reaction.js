let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw 'Ejemplo: ' + usedPrefix + command + ' 😅'
	if (!m.quoted) throw 'Etiqueta un mensaje  ' + usedPrefix + command + ' 😅'
	if (text) {
		await conn.relayMessage(m.chat, {
			reactionMessage: {
				key: {
					id: m.quoted.id,
					remoteJid: m.chat,
					fromMe: true
				},
				text: text
			}
		}, {
			messageId: m.quoted.id
		})
	}
	
}
handler.help = ['reaccion', 'reaccion']
handler.tags = ['herramientas']
handler.command = /^(r(eact(ion(s)?)?)?)$/i

module.exports = handler