let handler = async (m, { conn }) => {
     conn.reply(m.chat, `Este bot usa script github\n\nhttps://github.com/Confusion245/!`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


