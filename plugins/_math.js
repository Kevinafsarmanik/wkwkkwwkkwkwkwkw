let handler = m => m
handler.before = async function (m) {
  if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
  let id = m.chat
  // if (!m.quoted || m.quoted.sender != this.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) return !0
  this.math = this.math ? this.math : {}
  try {
    if (!(id in this.math) && /^apa hasil dari/i.test(m.quoted.text)) return m.reply('el asunto ha cconcluido')
    // if (m.quoted.id == this.math[id][0].id) {
    let math = JSON.parse(JSON.stringify(this.math[id][1]))
    if (m.text == math.result) {
      db.data.users[m.sender].exp += math.bonus
      clearTimeout(this.math[id][3])
      delete this.math[id]
      await this.sendButton(m.chat, benar + ` +${math.bonus} XP`, wm, `otra vez`, `.math ${math.mode}`, m)
    } else {
      if (--this.math[id][2] == 0) {
        clearTimeout(this.math[id][3])
        delete this.math[id]
        m.reply(`*La oportunidad está arriba!*\nResultado *${math.result}*`)
      } else m.reply(`*Respuesta incorrecta!*\nsigue ahí ${this.math[id][2]} oportunidad`)
    }
    // }
    return !0
  } catch (e) {
    return
  }
}

module.exports = handler
