async function handler(m, { isAdmin, isOwner }) {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw false
        }
    }
    if (!m.quoted) throw 'Etiqueta un mensaje!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'el mensaje al que respondiste no contenía una respuesta!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q']
handler.tags = ['herramientas']
handler.command = /^q$/i

module.exports = handler