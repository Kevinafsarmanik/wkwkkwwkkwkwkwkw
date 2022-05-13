let handler = async (m, { conn }) => {
    let { anon, anticall, backup, jadibot, groupOnly, epe, tag, self } = global.db.data.settings

    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const block = await conn.fetchBlocklist()
    
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)


    m.reply(`
┌─〔 Estado 〕
├ Activo durante ${uptime}
├ *${groups.length}* Grupos
├ *${chats.length - groups.length}* Chats
├ *${Object.keys(global.db.data.users).length}* Usuarios
├ *${block.length === undefined ? 'no hay ninguno' : block.length}* Block
├ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chats Baneados
├ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Usuarios Baneados
└────

┌─〔 Funciones 〕
├ ${anon ? '✅' : '❌'} *Chat anónimo*
├ ${anticall ? '✅' : '❌'} *Anti Call*
├ ${backup ? '✅' : '❌'} *Auto Backup DB*
├ ${groupOnly ? '✅' : '❌'} *Modo solo Grupo*
├ ${jadibot ? '✅' : '❌'} *Jadi Bot*
├ ${tag ? '✅' : '❌'} *Anti Tag Owner*
├ ${self ? '✅' : '❌'} *Modo Self*
└────
    `.trim())
}
handler.help = ['estado']
handler.tags = ['info']
handler.command = /^(stat?s?|infobot|estado|bot(stat?s?))$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
