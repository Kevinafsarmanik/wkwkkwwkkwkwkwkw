let handler = async (m, { conn, isROwner }) => {
    if (!isROwner) throw false
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `responde la imagen!`
        conn.updateProfilePicture(bot, img)
        m.reply('```Listo```')
    }
}
handler.help = ['setbotpp']
handler.tags = ['owner']
handler.command = /^(set(bot)?pp)$/i

module.exports = handler
