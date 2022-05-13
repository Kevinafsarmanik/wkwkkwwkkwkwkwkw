let handler = m => m

handler.before = async function (m) {
    let user = db.data.users[m.sender]
    if (m.chat.endsWith('status@broadcast')) {
        console.log('¡Estado')
    }
    if (user.premiumTime != 0 && user.premium) {
        if (new Date() * 1 >= user.premiumTime) {
            await this.sendButton(m.chat, `Hola @${m.sender.split`@`[0]}\n¡Se te acabó tu tiempo premium!`, wm, 'Propietario de Bot', '.owner', m)
            user.premiumTime = 0
            user.premium = false
        }
    }
}

module.exports = handler