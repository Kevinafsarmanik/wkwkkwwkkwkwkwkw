let handler = async (m, { conn, args, usedPrefix }) => {
    if (!args || !args[0]) throw '¿Quién quiere estar en Unwar, señor??'
    let mention = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Etiqueta a un objetivo'
    if (!(mention in global.db.data.users)) throw 'El usuario no está registrado en mi DATABASE!!'
    let user = global.db.data.users[mention]
    if (user.banned) throw 'El usuario ha sido baneado!!'
    if ((user.warning * 1) < 1) throw 'El usuario no tiene ninguna advertencia'
    let count = (args[1] || args.length > 0 ? !isNaN(parseInt(args[1])) ? parseInt(args[1]) : 1 : 1) || 1
    if ((user.warning * 1) < count * 1) throw `El usuario solo tiene *${user.warning * 1}* ADVERTENCIA!!`
    user.warning -= count * 1
    m.reply('No advertir al usuario con éxito!!')
    conn.sendButton(mention, 'Ha sido PROPIETARIO o MODERADOR sin advertirlo, ahora tiene *' + (global.db.data.users[mention].warning * 1) + '* ADVERTENCIA', wm, 'Owner', usedPrefix + 'owner', null)
}

handler.help = ['unwarn @mencion']
handler.tags = ['owner']
handler.command = /^unwarn(user)?$/i
handler.owner = true
handler.fail = null

module.exports = handler
