let handler = async (m, { conn, usedPrefix, participants, groupMetadata, text }) => {
    const getGroupAdmins = (participants) => {
    var admins = []
    for (let i of participants) {
        i.admin === "admin" ? admins.push(i.id) : ''
        i.admin === "superadmin" ? admins.push(i.id) : ''
    }
    return admins
    }
    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.profilePictureUrl(m.chat, 'image')
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, expired, descUpdate, stiker, antispam, antitroli, antivirtex, antiBadword, simi, closeGroup } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')

        if (text) return m.reply(msToDate(expired - new Date() * 1))

        let grup = await conn.groupMetadata(m.chat)
        let caption = `*Información del Grupo*\n
*ID:* 
${await groupMetadata.id}

*Nombre:* 
${await groupMetadata.subject}

*Descripción:* 
${await groupMetadata.desc}

*Participantes:*
${participants.length}

*Creador:* 
@${m.chat.split`-`[0]}

*Admins/s:*
${listAdmin}

*Configuración del bot:*
${antiLink ? '✅' : '❌'} Anti Link
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Eliminar
${isBanned ? '✅' : '❌'} Baneado
${descUpdate ? '✅' : '❌'} Descripción
${detect ? '✅' : '❌'} Detect
${stiker ? '✅' : '❌'} Sticker
${welcome ? '✅' : '❌'} Welcome
${antispam ? '✅' : '❌'} Anti Spam
${antiBadword ? '❌' : '✅'} Anti Badword
${antitroli ? '✅' : '❌'} Anti Troli
${antivirtex ? '✅' : '❌'} Anti Virtex
${closeGroup ? '✅' : '❌'} Cierre automático
*Configuración de mensajes del bot:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}

*Límite:*
${msToDate(expired - new Date() * 1)}
`.trim()
        let mentionedJid = groupAdmins.concat([`${m.chat.split`-`[0]}@s.whatsapp.net`])
        conn.sendButtonImg(m.key.remoteJid, pp, caption, wm, 'Menu', usedPrefix + 'menu', m, { thumbnail: pp , mentions: mentionedJid })
    }
}
handler.help = ['infogrup']
handler.tags = ['grupos']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " Dia/s " + hours + " Horas " + minutes + " Minutos";
    // +minutes+":"+sec;
}