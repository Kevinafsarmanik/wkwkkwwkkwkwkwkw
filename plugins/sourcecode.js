let handler = async (m, { conn }) => {
     conn.reply(m.chat, `Sc nya Masi prifate bahasanya juga Masi bahasa planet lain/!`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


