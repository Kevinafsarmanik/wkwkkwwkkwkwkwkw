let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Si encuentra un mensaje de error, repórtelo usando este comando\n\nEjemplo:\n${usedPrefix + command} Buenas tardes propietario, encontré un error como el siguiente <error>`
    if (text.length < 10) throw `El informe es demasiado corto, al menos 10 caracteres.!`
    if (text.length > 1000) throw `El informe es demasiado largo, máximo 1000 caracteres!`
    let teks = `*${command.toUpperCase()}!*\n\nDesde : *@${m.sender.split`@`[0]}*\n\nMensaje : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
    	mentions: [m.sender]
    })
    conn.reply(m.chat, `_Mensaje enviado al propietario del bot, ${command.toLowerCase()} solo spam no será respondido._`, m)
}
handler.help = ['report', 'request'].map(v => v + '<text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
handler.limit = true
handler.private = true

module.exports = handler
