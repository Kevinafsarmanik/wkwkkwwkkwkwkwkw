let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `Etiqueta o responde a los mensajes que desea hacer premium!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `berapa hari mamaskuh?`
    if (isNaN(txt)) return m.reply(`Ejemplo:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
    user.premium = true
    m.reply(`Listo!\n*${user.name}* ahora tiene premiun ${txt} día.\n\nCuenta regresiva: ${conn.msToDate(user.premiumTime - now)}`)
}
handler.help = ['addprem [@user] <Dia>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.rowner = true

module.exports = handler