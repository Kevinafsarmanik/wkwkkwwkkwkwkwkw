let { groupsSettingUpdate } = require('@adiwajshing/baileys')
let handler = async (m, { isAdmin, isOwner, isBotAdmin, conn, args, usedPrefix, command }) => {
	if (!(isAdmin || isOwner)) {
		global.dfail('admin', m, conn)
		throw false
	}
	if (!isBotAdmin) {
		global.dfail('botAdmin', m, conn)
		throw false
	}
let prefix = usedPrefix
let bu = `El grupo ha sido abierto por @${m.sender.split`@`[0]} y ahora todos los miembros pueden enviar mensajes

Escribe *${usedPrefix}grupo abrir*
Para abrir ek grupo.`.trim()            
    
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
Ejemplo:
${usedPrefix + command} cerrar
${usedPrefix + command} abrir
	`.trim(), wm, 'Abrir', '#grup 1', 'Cerrar', '#grup 0', m)
		throw false
	} else if (isClose === 'announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	let teks = `El grupo ha sido cerrado por @${m.sender.split`@`[0]} y ahora solo el/los administrador/es puede/n enviar mensajes

Escribe *${usedPrefix}grupo abrir*
Para abrir el grupo.`.trim()
	await conn.sendButton(m.chat, teks, wm, 'Abrir', '.grupo abrir', m, { mentions: [m.sender] })
	} else if (isClose === 'not_announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	await conn.sendButton(m.chat, bu, wm, 'Cerrar', '.grupo cerrar', m, { mentions: [m.sender] })
	} else if (isClose === undefined) {
	await conn.send2Button(m.chat, `
Ejemplo:
${usedPrefix + command} cerrar
${usedPrefix + command} abrir
	`.trim(), wm, 'Abrir', '#grup 1', 'Cerrar', '#grup 0', m)
	}
}

handler.help = ['grupo <abrir/cerrar>']
handler.tags = ['grupos']
handler.command = /^(grupo)$/i
handler.group = true
handler.botAdmin = false

module.exports = handler
   